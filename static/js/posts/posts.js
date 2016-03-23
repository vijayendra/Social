(function(){
  'use strict';
  angular.module('social.posts', [
    'social.posts.controllers',
    'social.posts.directives',
    'social.posts.services'
  ]);
  angular.module('social.posts.controllers', []);
  angular.module('social.posts.directives', ['ngDialog']);
  angular.module('social.posts.services', []);
})();