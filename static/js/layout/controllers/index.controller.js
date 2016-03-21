(function(){
  'use strict';
  angular
   .module('social.layout.controllers')
   .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope'];
  function IndexController($scope){
    var vm = this;
  }
})();