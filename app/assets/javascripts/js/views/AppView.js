var app = app || {};

app.appView = Backbone.View.extend({

  el: '#main',
  render: function() {
    var conversationsView = new app.ConversationsView({collection: conversations});
    conversationsView.render();
  }

});
