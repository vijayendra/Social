(function(){
  'use strict';
  angular.module('social.posts.controllers')
  .controller('PostsController', PostsController);

  PostsController.$inject = ['$scope', 'Posts'];
  function PostsController($scope, Posts){
    $scope.posts = [];
    activate();
    function activate(){
      Posts.all().then(success, failure);
      function success(data, status, headers, config){
        console.log(data);
        $scope.posts = data.data;
      }
      function failure(data, status, headers, config){
        console.error(data.error);
      }

      $scope.$on('post.created', function(event, post){
        $scope.posts.unshift(post);
      })
      $scope.$on('post.created.error', function(event, post){
        $scope.posts.shift();
      })
    }
  }
  
})();