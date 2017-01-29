const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const child = require('child_process');
const concat = require('gulp-concat');
const gulp = require('gulp');
const gulpCopy = require('gulp-copy');
const gutil = require('gulp-util');
const sass = require('gulp-sass');

const cssFiles = '_css/**/*.?(s)css';
const htmlFiles = ['**/*.html','!_site/**/*'];
const mdFiles = ['**/*.md','!_site/**/*'];
const libraries = [
    { src: 'bower_components/jquery/dist/jquery.min.js', dst: 'js/libs/' },
    { src: 'bower_components/jquery-ui/jquery-ui.min.js', dst: 'js/libs/' },
    { src: 'bower_components/pure/pure-min.css', dst: 'css/libs/' },
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

gulp.task('css', () => {
    gulp.src(cssFiles)
        .pipe(sass())
        .pipe(concat('all.css'))
        .pipe(autoprefixer())
        .pipe(gulp.dest('css'));
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

    gulp.watch(cssFiles, ['css']);
    gulp.watch(htmlFiles, ['jekyll']);
    gulp.watch(mdFiles, ['jekyll']);
});

gulp.task('build', ['copyLibs','css', 'jekyll']);
gulp.task('default', ['copyLibs','css', 'jekyll', 'serve']);