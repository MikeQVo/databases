var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  roomsArray: [],
  friendsList: [],

  initialize: function() {
    App.username = window.location.search.substr(10);
 
    FormView.initialize();
    RoomsView.initialize(App.roomsArray);
    MessagesView.initialize();
    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    
  },
  
  
  //add a setInterval to this to do so 
  fetch: function(callback= ()=>{    //fetch(callback())  function(parse.readall() )
       
  }) {
    Parse.readAll((data) => {
      var messageArray = data.results.slice();
      for(let i=0; i<21; i++){
        MessagesView.renderMessage(messageArray[i])
      }
    
      callback()
    });
 
  },

  //POST request 
  // add: function()
  post: function(callback = ()=>{ 
      
  }) {
    Parse.create(Messages, function() {
      MessagesView.initialize();
      App.fetch();
      callback();
    });
  },
  
  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  addNewRoom: function(roomname) {
    
    App.roomsArray.push(roomname)
    RoomsView.renderRoom(roomname)
  },

  addNewFriend: function(friendName){
    if((App.friendsList.indexOf(friendName) === -1)){
      Friends.toggleStatus(friendName);
      App.friendsList.push(friendName);
    } 
  },

  changeRoom: function(roomname) {
    console.log("roomname is ", roomname)
    console.log("WHALE HELO THERE")
    MessagesView.initialize()
    Parse.readAll((data) => {
      var messageArray = data.results.slice();
      // var filtered = messageArray.filter((message)=>{
      //   return message.roomname === roomname;
      // })

     
      for(let i=0; i < messageArray.length; i++){
        console.log("!!!!!!!!")
        
        if(messageArray[i].roomname === roomname){
          console.log("!!!!!!", messageArray[i])
          MessagesView.renderMessage(messageArray[i])
        } 
      }
    });
  }
};

