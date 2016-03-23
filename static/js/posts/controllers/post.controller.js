(function(){
  'use strict';
  angular.module('social.posts.controllers')
  .controller('PostController', PostController);

  PostController.$inject = ['$scope', '$http', 'Post', 'Comments'];
  function PostController($scope, $http, Post, Comments){
    $scope.showAddCommentForm = false;
    $scope.comments = [];

    $scope.addComment = function(post_id, parent_id, comment){
      Comments.create(post_id, parent_id, comment).then(success, failure);
      function success(data, status, headers, config){
        console.log('Success! Comment created.');
        console.log(data.data);
        $scope.comments.push(data.data);
      };
      function failure(data, status, headers, config){
        console.error(data.error);
      };
      $scope.comment = "";
      $scope.showAddCommentForm = false;
    }

    $scope.init = function(post_id){
      $scope.post_id = post_id;
      console.log("Init post: "+post_id);
      Comments.get(post_id).then(success, failure);
      function success(data, status, headers, config){
        $scope.comments = data.data;
      };
      function failure(data, status, headers, config){
        console.error(data.error);
      };
    }
  }
  
})();