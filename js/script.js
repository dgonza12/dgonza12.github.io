$(function() {
    $.scrollify({
        section : "section",
        scrollbars: false,
        before: function (i,sections) {
            var sectionName = sections[i].attr('data-section-name');
            if( sectionName === 'about'){
                $('.polaroid').addClass('active');
            } else {
                $('.polaroid').removeClass('active');
            }
        }
    });
});