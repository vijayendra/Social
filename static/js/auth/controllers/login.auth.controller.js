(function(){
  'use strict';
  angular
     .module('social.auth.controllers')
     .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope'];
  function LoginController($scope){
    var vm = this;
  }

})();