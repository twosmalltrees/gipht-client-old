var app = app || {};

app.Messages = Backbone.Collection.extend({
  url: '/conversations/:conversation_id/messages',
  model: app.Messages
});
