var app = app || {};

app.Content = Backbone.Model.extend({
    // 0 = text, 1 = image, 2 = title, 3 = heading
    defaults:{
        type: '0',
        text: '',
        image: '',
        title: '',
        heading: ''
    }
});