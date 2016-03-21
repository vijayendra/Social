(function(){
  'use strict';
  httpConfig.$inject = ['$httpProvider'];
  function httpConfig($httpProvider){
     $httpProvider.defaults.xsrfCookieName = 'csrftoken';
     $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  }
  
  locationConfig.$inject = ['$locationProvider'];
  function locationConfig($locationProvider){
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }

  angular.module('social', [
    'social.routes',
    'social.layout',
    'social.users',
    'social.auth'
  ])
  .config(httpConfig)
  .config(locationConfig);
  
})();