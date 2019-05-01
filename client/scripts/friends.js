var Friends = {
  //add friends to user's friends array
  toggleStatus: function(friend) {
        $(`.${friend}`).toggleClass('friend');
  },
  
  addListener: function(){
    $('.username').on('click', function(e){
    
    var username = _.escape($(e.target).text());
    window.App.addNewFriend(username);  
    })
  }
  //bold those anems
  
};
