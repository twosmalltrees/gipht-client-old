var app = app || {};

app.Friends = Backbone.Collection.extend({
  url: '/friends',
  model: app.Friend
});
