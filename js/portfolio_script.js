$(function() {
    $.scrollify({
        section : "section",
        scrollbars: false,
        before: function (i,sections) {
            var sectionName = sections[i].attr('data-section-name');
            if( sectionName !== 'landing'){
                $('nav').addClass('active');
            } else {
                $('nav').removeClass('active');
            }
        }
    });
});