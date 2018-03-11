var app = app || {};

app.BlogView = Backbone.View.extend({
    tagName: 'div',
    className: 'blogContainer',
    template: _.template($('#blogTemplate').html()),

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});