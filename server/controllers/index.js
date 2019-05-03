var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      db.Message.findAll({ include: [db.User] })
        .then(function(results) {
          res.JSON(results);
        });
    },
    post: function (req, res) {
      User.findOrCreate({where: { username: req.body[username] }})
        .spread(function(user, created) {
          db.Message.create({
            text: req.body[message_text],
            userid: user.get('id'),
            roomname: req.body[room_name]
          }).then(function(results) {
            res.sendStatus(201);
          });
        });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      db.User.findAll()
        .then(function(results) {
          res.JSON(results);
        });
    },
    post: function (req, res) {
      db.User.findOrCreate({where: { username: req.body[username] }})
        .spread(function(user, created) {
          res.sendStatus(201);
        });
    }
  }
};

