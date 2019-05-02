var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      /*
      select messages.id, messages.text, messages.roomname from messages \
      left outer join users on *messages.userid = users.id) \
      order by messages.id desc
      */
      db.query('select * from messages',
        function (error, results, fields) {
          if (error) {
            throw 'error';
          } else {
            console.log('messages fields ---- ', fields);
            callback(results);
          }
        }
      );
    }, // a function which produces all the messages
    post: function (results, callback) {
      db.query('INSERT INTO messages SET ', {userName: results.username}, {messageText: results.text}, {roomName: results.roomname}, function(error, results, fields) {
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
      db.query('select * from users',
        function (error, results, fields) {
          if (error) {
            throw 'error';
          } else {
            console.log('users field ----- ', fields);
            callback(results);
          }
        }
      );
    },
    post: function (results, callback) {
      db.query('INSERT INTO users SET', {userName: results.username}, function(err, results, fields) {
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

