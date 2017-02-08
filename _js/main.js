var adjustBackground = function () {
    if(window.innerWidth < 768){
        $('body').css('background-image','');    
    } else {
        var headerBoxWidth = $('.header-box').css('width');
        var rowMargin = $('.row').css('margin-left');

        var newWidth = parseFloat(headerBoxWidth) + parseFloat(rowMargin);
        newWidth = String(newWidth) + 'px';
        // TODO: Un-hardcode the $light-blue color
        newWidth = 'linear-gradient(90deg, rgb(148, 205, 227) ' + newWidth + ', white 0%)';

        $('body').css('background-image',newWidth);
    }
};

$(document).ready(function (){
    console.log('JQuery is ready');
    adjustBackground();
});

$(window).on('resize', function (){
    adjustBackground();
});
