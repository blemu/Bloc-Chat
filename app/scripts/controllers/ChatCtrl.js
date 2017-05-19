(function() {
  function ChatCtrl(Room, Message, $uibModal) {

    this.rooms = Room.all;
    this.messages = null;
      
      var ctrl = this;
    
      this.open = function () {
        console.log('Open the modal');
        var modalInstance = $uibModal.open({
            templateUrl: '/templates/room-modal.html',
            controller: 'ModalCtrl',
            controllerAs: '$ctrl'
        });
          
          modalInstance.result.then(function (roomName) {
              console.log('They have clicked OK', roomName);
              Room.addRoom(roomName);
          }, function () {
             console.log('They have clicked Cancel'); 
          });
      };
      
      
        this.startChat = function (roomId) {
            ctrl.messages = Message.getByRoomId(roomId);
            console.log(ctrl.messages);
        };
      
      this.sendMessage = function () {
        // ctrl.newMessageText  
      };
  }

  angular
    .module('blocChat')
    .controller('ChatCtrl', ['Room','Message', '$uibModal', ChatCtrl]);
})();