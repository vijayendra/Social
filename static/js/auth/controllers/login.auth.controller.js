(function(){
  'use strict';
  angular
     .module('social.auth.controllers')
     .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope'];
  function LoginController($scope){
    var vm = this;
    $scope.username = "";
    $scope.password = "";
    $scope.login = function(){
      console.log($scope.username);
      console.log($scope.password);
    }
  }

})();