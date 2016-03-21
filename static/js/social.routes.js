(function(){
  'use strict';
  routeConfig.$inject = ['$routeProvider'];
  function routeConfig($routeProvider){
    $routeProvider.when('/', {
      controller: 'IndexController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/layout/main.html'
    }).when('/register', {
      controller: 'RegisterController', 
      controllerAs: 'vm',
      templateUrl: '/static/templates/auth/register.html'
    }).when('/login', {
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/auth/login.html'
    }).when('/logout', {
      controller: 'LogoutController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/auth/login.html'
    }).otherwise('/');
  }
  angular.module('social.routes', ['ngRoute']).config(routeConfig);
})();