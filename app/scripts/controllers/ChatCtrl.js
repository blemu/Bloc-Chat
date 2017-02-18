(function() {
  function ChatCtrl(Room) {
    this.rooms = Room;
      
  }

  angular
    .module('blocChat')
    .controller('ChatCtrl', ['Room', ChatCtrl]);
})();