(function() {
  function ChatCtrl(Room, $uibModal) {

    this.rooms = Room.all;
    
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
  }

  angular
    .module('blocChat')
    .controller('ChatCtrl', ['Room', '$uibModal', ChatCtrl]);
})();