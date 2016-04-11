var app = app || {};

app.Notifications = Backbone.Collection.extend({
  url: '/notifications',
  model: app.Notification
});
