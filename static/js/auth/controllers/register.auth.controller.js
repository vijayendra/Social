(function(){
  'use strict';
  angular
     .module('social.auth.controllers')
     .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$scope'];
  function RegisterController($scope){
    var vm = this;
  }

})();