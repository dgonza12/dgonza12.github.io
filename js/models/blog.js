var app = app || {};

app.Blog = Backbone.Model.extend({
    defaults: {
        title: 'no title',
        date: 'no date',
        image: '',
        short: 'no short blurb'
    }
});