(function(){
  'use strict';
  angular
  .module('social.posts.directives')
  .directive('posts', posts);

  function posts(){
    var directive = {
      controller: 'PostsController',
      controllerAs: 'posts',
      restrict: 'E',
      scope: {
        posts: '='
      },
      templateUrl: '/static/templates/posts/posts.html'
    };
    return directive;
  }

})();