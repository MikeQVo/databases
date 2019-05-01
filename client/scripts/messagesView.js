var MessagesView = {

  $chats: $('#chats'),
  
  initialize: function() {
    this.$chats.html('');
  },

  renderMessage: function(message){
    Friends.addListener()
    //prehaps do escape here https://underscorejs.org/#escape
  
    this.$chats.append(`<div class="message">${MessageView.render(message)}</div>`);
    // Friends.addListener()
  }
 
};

  