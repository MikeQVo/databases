var models = require('../models');
var bluebird = require('bluebird');

var userFields = ['username'];
var messageFields = ['message', 'username', 'roomname'];

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) {
          throw 'error';
        } else {
          res.JSON(results);
        }
      });
    },
    post: function (req, res) {
      var params = [req.body[message_text], req.body[user_name], req.body[room_name]];
      models.messages.post(params, function(err, results) {
        if (err) {
          throw 'error';
        } else {
          res.JSON(results);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) {
          throw 'error';
        } else {
          res.JSON(results);
        }
      });
    },
    post: function (req, res) {
      var params = [req.body[user_name]];
      models.messages.post(params, function(err, results) {
        if (err) {
          throw 'error';
        } else {
          res.JSON(results);
        }
      });
    }
  }
};

