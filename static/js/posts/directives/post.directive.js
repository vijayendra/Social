(function(){
  'use strict';
  angular
  .module('social.posts.directives')
  .directive('post', post);

  function post(){
    var directive = {
      restrict: 'E',
      scope: {
        post: '='
      },
      templateUrl: '/static/templates/posts/post.html'
    };
    return directive;
  }

})();