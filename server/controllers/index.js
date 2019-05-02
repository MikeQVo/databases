var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      /*
        models.messages.get(function(err, results) {
          res.JSON(results);
        })
      */
    },
    post: function (req, res) {
      /*
        params = [req.body[text], req.body[username], req.body[roomname] ];
        models.messages.post(function(err, results) {

          res.JSON(results);
        })
      */
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      /*
        models.users.get(function(err, results) {
          res.JSON(results);
        })
      */
    },
    post: function (req, res) {
      /*
        params = [req.body[username]];
        models.messages.post(function(err, results) {

          res.JSON(results);
        })
      */
    }
  }
};

