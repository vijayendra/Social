(function(){
  'use strict';
  angular
     .module('social.auth.controllers')
     .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$scope'];
  function RegisterController($scope){
    var vm = this;
    $scope.username = "";
    $scope.email = "";
    $scope.password = "";
    $scope.register = function(){
      console.log($scope.username);
      console.log($scope.email);
      console.log($scope.password);
    }
  }

})();