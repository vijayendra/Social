(function(){
  'use strict';
  angular
  .module('social.posts.directives')
  .directive('post', post);

  function post(){
    var directive = {
      controller: 'PostController',
      restrict: 'E',
      scope: {
        post: '=',
        index: '='
      },
      templateUrl: '/static/templates/posts/post.html'
    };
    return directive;
  }

})();