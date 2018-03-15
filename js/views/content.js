var app = app || {};

app.ContentView = Backbone.View.extend({
    tagName: 'div',
    className: 'contentContainer',
    template: _.template($('#contentTemplate').html()),

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});