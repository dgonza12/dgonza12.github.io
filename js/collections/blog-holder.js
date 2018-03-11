var app = app || {};

app.blogHolder = Backbone.Collection.extend({
    model: app.Blog
});