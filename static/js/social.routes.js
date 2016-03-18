(function(){
  'use strict';
  routeConfig.$inject = ['$routeProvider'];
  function routeConfig($routeProvider){
    $routeProvider.when('/', {
      controller: 'MainController',
      controllerAs: 'app',
      templateUrl: '/static/templates/layout/main.html'
    }).otherwise('/');
  }
  angular.module('social.routes', []).config(routeConfig);
})();