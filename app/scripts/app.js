(function() {
     function config($stateProvider, $locationProvider) {
      
        $stateProvider
            .state('chat',{
                url: '/',
                controller: 'ChatCtrl as chat',
                templateUrl: '/templates/chat.html'  
            })  
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
     }
    angular
         .module('blocChat', ['ui.router','firebase'])
         .config(config);
 })();