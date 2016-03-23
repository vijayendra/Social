(function(){
  'use strict';
  angular.module('social.posts.controllers')
  .controller('PostController', PostController);

  PostController.$inject = ['$scope', '$http', 'Post'];
  function PostController($scope, $http, Post){
    $scope.showAddCommentForm = false;

    $scope.addComment = function(post_id, parent_id, comment){
      Post.addComment(post_id, parent_id, comment).then(success, failure);
      function success(data, status, headers, config){
        console.log('Success! Comment created.');
        console.log(data.data);
      };
      function failure(data, status, headers, config){
        console.error(data.error);
      };
      
    }
  }
  
})();