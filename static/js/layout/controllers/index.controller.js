(function(){
  'use strict';
  angular
   .module('social.layout.controllers')
   .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', 'Authentication'];
  function IndexController($scope, Authentication){
    $scope.isAuthenticated = function(){
      return Authentication.isAuthenticated();
    }

  }
})();