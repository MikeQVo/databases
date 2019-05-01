var Messages = {

  text: null,
  username: null,
  roomname: null
  
};

// Messages.formListener = function() {
//   console.log("listening for submits....")

  $("#send").on('submit' ,(function(event){
    console.log('submit button is working here is the message, ', Messages);
    event.preventDefault();
    var text = $('#message').val();
    Messages.text = _.escape(text)
    Messages.username = window.location.search.substr(10)
    Messages.roomname = window.RoomsView.$select.val()
    // window.App.post(() => console.log('we posted a message', Messages.text));
    window.App.post(() => MessagesView.renderMessage(Messages) )
    
    // window.App.fetch(() =>{console.log('refreshing messages')}));
 
  }));

// }
