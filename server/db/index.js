/* eslint-disable camelcase */
var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '3bees8me.');

var User = db.define('User', {
  user_name: Sequelize.STRING
});

var Message = db.define('Message', {
  message_text: Sequalize.STRING,
  room_name: Sequelize.STRING
});

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;
