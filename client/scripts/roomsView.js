var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function(roomArray) {
    for(var i = 0; i < roomArray.length; i++) {
      this.$select.prepend(`<option value="${roomArray[i]}">${roomArray[i]}</option>`);
    }
    // <div id="rooms">
    //     Room:
    //     <select></select>
    //     <
    //     <button>Add Room</button>
    //   </div>
  },


  // for each room 
  //render each MessagesView 
  renderRoom: function(name){
    
    this.$select.append(`<option value="${name}">${name}</option>`);
  }
}
