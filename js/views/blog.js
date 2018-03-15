var app = app || {};

app.BlogView = Backbone.View.extend({
    tagName: 'div',
    className: 'blogContainer',
    template: _.template($('#blogTemplate').html()),

    events: {
        "click .blog-button" : "open"
    },

    open: function () {
        console.log("Hello");
        $('#blog').empty();
        $('#blog').show();
        $('#close-blog').show();
        $('#blogs').hide();
        $('#home').hide();
        $('#about').hide();
        $('#projects').hide();
        new app.contentHolderView(this.model.get('content'));
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});