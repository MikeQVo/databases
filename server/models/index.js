var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {

      var queryStr = 'select messages.id, messages.message_text, messages.room_name, users.user_name from messages \
                     left outer join users on * (messages.user_id = users.id) \
                     order by messages.id desc';

      db.query(queryStr, function (error, results) {
        if (error) {
          throw 'error';
        } else {
          callback(results);
        }
      });
    }, // a function which produces all the messages
    post: function (params, callback) {

      var queryStr = 'insert into messages (message_text, user_id, room_name) \
                      values (?, (select id from users where user_name = ? limit 1), ?)';

      db.query(queryStr, params, function(err, results) {
        if (err) {
          throw 'error';
        } else {
          callback(results);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = 'select * from users';
      db.query(queryStr, function (error, results) {
        if (error) {
          throw 'error';
        } else {
          callback(results);
        }
      });
    },
    post: function (params, callback) {
      var queryStr = 'insert into users(user_name) values (?)';
      db.query(queryStr, params, function(err, results) {
        if (err) {
          throw 'error';
        } else {
          callback(results);
        }
      });
    }
  }
};

/*
PERHAPS THIS IS WHERE WE SET UP OUR QUERIES
{username: 'valjean', text: 'hello there', roomname: 'paris'}
0|   1   |      2          |   3        |4
1|valjean|'a loaf of bread'|'paris'     |1
2|michael|'ahoy there'     |black lagoon|2


db.query('select user_name, message_text, room_name from messages', function(error, results, fields) {})

INSERT INTO `table_name`(column_1,column_2,...) VALUES (value_1,value_2,...);

INSERT INTO users SET user_name = results.username
*/

