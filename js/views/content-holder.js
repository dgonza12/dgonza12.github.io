var app = app || {};

app.contentHolderView = Backbone.View.extend({
    el: '#blog',

    initialize: function ( initialContents ) {
        this.collection = new app.contentHolder( initialContents );
        this.render();
    },

    render: function () {
        this.collection.each( function (item) {
            this.renderContent(item);
        }, this);
    },

    renderContent: function(item){
        var ContentView = new app.ContentView({
            model: item
        });
        this.el.append( ContentView.render().el);
    }
});