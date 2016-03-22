(function(){
  'use strict';
  angular
     .module('social.auth.controllers')
     .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', '$scope', 'Authentication'];
  function LoginController($location, $scope, Authentication){
    var vm = this;
    $scope.username = "";
    $scope.password = "";

    activate();

    $scope.login = function(){
      Authentication.login($scope.username, $scope.password);
    }

    function activate(){
      if(Authentication.isAuthenticated())
        $location.url('/');
    }

  }

})();