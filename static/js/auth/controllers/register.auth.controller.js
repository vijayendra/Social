(function(){
  'use strict';
  angular
     .module('social.auth.controllers')
     .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$location', '$scope', 'Authentication'];
  function RegisterController($location, $scope, Authentication){
    var vm = this;
    $scope.username = "";
    $scope.email = "";
    $scope.password = "";
    activate();

    function activate(){
      if(Authentication.isAuthenticated())
        $location.url('/');
    }

    $scope.register = function(){
      Authentication.register($scope.username, $scope.email, $scope.password);
    }
  }

})();