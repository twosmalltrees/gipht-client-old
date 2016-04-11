var app = app || {};

app.Conversations = Backbone.Collection.extend({
  url: 'http://localhost:3001/conversations',
  model: app.Conversation
});
