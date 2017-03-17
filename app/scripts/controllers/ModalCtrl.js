(function() {
  function ModalCtrl($uibModalInstance) {
      var $ctrl = this;
    this.ok = function () {
      $uibModalInstance.close($ctrl.roomName);
    };
    
      this.cancel = function () {
          $uibModalInstance.dismiss('cancel');
      };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModalInstance', ModalCtrl]);
})();