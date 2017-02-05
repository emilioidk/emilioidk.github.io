const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const child = require('child_process');
const concat = require('gulp-concat');
const gulp = require('gulp');
const gulpCopy = require('gulp-copy');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');

const cssFiles = '_css/**/*.?(s)css';
const jsFiles = '_js/**/*.js';
const htmlFiles = ['**/*.html','!_site/**/*'];
const mdFiles = ['**/*.md','!_site/**/*'];
const assets = ['_assets/**/*.png','_assets/**/*.svg'];
const libraries = [
    { src: 'bower_components/jquery/dist/jquery.min.js', dst: 'js/libs/' },
    { src: 'bower_components/jquery-ui/jquery-ui.min.js', dst: 'js/libs/' },
    { src: 'bower_components/pure/grids-responsive-min.css', dst: 'css/libs/' },
];
const siteRoot = '_site';

var countSubFolders = function(path) {
    return path.match(/\//g).length;
};

gulp.task('copyLibs',() => {
    libraries.forEach((library) => {
        gutil.log("[copyLibs] Copying " + library.src + " into " + library.dst);
        gulp.src(library.src)
            .pipe(gulpCopy(library.dst, { prefix:countSubFolders(library.src) }));
    });
});

// TODO: Prevent compiling errors from exiting gulp default command
gulp.task('css', () => {
    gulp.src(cssFiles)
        .pipe(sass())
        .pipe(concat('all.css'))
        .pipe(autoprefixer())
        .pipe(gulp.dest('css'));
});

gulp.task('image-optimization', () => {
    gulp.src(assets)
        .pipe(imagemin())
        .pipe(gulp.dest('assets'));
});

gulp.task('js', () => {
    gulp.src(jsFiles)
        .pipe(concat('main.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('jekyll', () => {
    const jekyll = child.spawn('bundle', ['exec','jekyll','build']);

    const jekyllLogger = (buffer) => {
        buffer.toString()
            .split(/\n/)
            .forEach((message) => {
                if(message.length > 0)
                    gutil.log("[jekyll] " + message);
            });
    };

    jekyll.stdout.on('data', jekyllLogger);
    jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('serve', () => {
    browserSync.init({
        files: [siteRoot + '/**'],
        port: 4000,
        server: {
            baseDir: siteRoot
        }
    });

    gulp.watch(cssFiles, ['css','jekyll']);
    gulp.watch(jsFiles, ['js','jekyll']);
    gulp.watch(assets, ['image-optimization','jekyll']);
    gulp.watch(htmlFiles, ['jekyll']);
    gulp.watch(mdFiles, ['jekyll']);
});

gulp.task('build', ['copyLibs','css', 'js', 'image-optimization', 'jekyll']);
gulp.task('default', ['build', 'serve']);
