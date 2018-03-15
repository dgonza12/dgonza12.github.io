var app = app || {};

app.blogHolderView = Backbone.View.extend({
    el: '#blogs',

    initialize: function ( initialBlogs ) {
        this.collection = new app.blogHolder(initialBlogs);
        this.render();
    },

    render: function () {
        this.collection.each( function (item) {
            this.renderBlog(item);
        }, this);
    },

    renderBlog: function (item) {
        var blogView = new app.BlogView({
            model: item
        });
        this.el.append( blogView.render().el );
    }
});