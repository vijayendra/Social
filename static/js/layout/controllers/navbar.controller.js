(function(){
  'use strict';
  angular
    .module('social.layout.controllers')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', 'Authentication'];
  function NavbarController($scope, Authentication){
    $scope.logout = function(){
      Authentication.logout();
    };
  }
})();