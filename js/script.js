$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    var $primaryNav = $('.primary-nav');
    if(scroll > 0){
        $primaryNav.addClass('color-two-background');
    } else {
        $primaryNav.removeClass('color-two-background');
    }
});

$('.nav-bar li').on('click', function (event) {
    $(('.' + $(event.currentTarget).attr('data-section')))[0].scrollIntoView({behavior: 'smooth'});
});

$('.timeline-item .expand, .timeline-item .close').on('click', function (event) {
    if($(this).parent().hasClass('active')){
        $('.timeline-item').removeClass('active');
    } else {
        $('.timeline-item').removeClass('active');
        $(this).parent().addClass('active');
    }
});