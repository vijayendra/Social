(function(){
  'use strict';
  angular.module('social.auth', [
    'social.auth.controllers',
    'social.auth.services'
  ]);
  angular.module('social.auth.controllers', []);
  angular.module('social.auth.services', ['ngCookies']);
  
})();