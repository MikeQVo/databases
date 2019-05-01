var Rooms = { //listens to event handlers and ONLY send information to app on it's intentions
//1create  - listen & send room to app

  add: function(roomName) {
    window.App.addNewRoom(roomName)

 },

  restoreRoomChat: function(roomName) {
    window.App.changeRoom(roomName);
  }
  
    //prehaps do escape here https://underscorejs.org/#escape

//2 listen for room change & change to existing rooms

};

/*  roomarray = []

    if(brand new input){
      push to array
    }
    else {
      take send room up to model
      add room or switch to room
    }

*/

$('#rooms button').on('click', ()=>{
  var roomString = _.escape(prompt("Please provide the room name"))
  Rooms.add(roomString)
})

$('#rooms select').on('change', (e)=>{
  var valueSelected = $(e.target).find("option:selected").val();
  Rooms.restoreRoomChat(valueSelected)
})