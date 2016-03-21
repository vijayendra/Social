(function(){
  'use strict';
  routeConfig.$inject = ['$routeProvider'];
  function routeConfig($routeProvider){
    $routeProvider.when('/', {
      controller: 'IndexController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/layout/main.html'
    }).otherwise('/');
  }
  angular.module('social.routes', ['ngRoute']).config(routeConfig);
})();