var app = app || {};

_.templateSettings = {
   interpolate: /\{\{\=(.+?)\}\}/g,
   evaluate: /\{\{(.+?)\}\}/g
};

var conversations  = new app.Conversations();
var favourites  = new app.Favourites();
var friends = new app.Friends();
var messages = new app.Messages();
var notifications = new app.Notifications();
var router = new app.Router();

$(document).ready(function() {
  conversations.fetch().done(function(){
    Backbone.history.start();
  });
});
