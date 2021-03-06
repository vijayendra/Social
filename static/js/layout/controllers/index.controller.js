(function(){
  'use strict';
  angular
   .module('social.layout.controllers')
   .controller('IndexController', IndexController);

  IndexController.$inject = ['$location', '$scope', 'Authentication', 'Posts', 'ngDialog'];
  function IndexController($location, $scope, Authentication, Posts, ngDialog){
    $scope.isAuthenticated = function(){
      return Authentication.isAuthenticated();
    }
    $scope.posts = [];
    activate();

    $scope.newPost = function(){
      if(!$scope.isAuthenticated()){
        $location.url('/login');
      } else {
        ngDialog.open({
          template: '/static/templates/posts/new-post.html',
          controller: 'NewPostController',
          controllerAs: 'post'
        });
      }
    }
    function activate(){
      function success(data, status, headers, config){
        $scope.posts = data.data;
      }
      function failure(data, status, headers, config){
        console.error('Failed to load posts');
      }
      if($scope.isAuthenticated()){
        Posts.all().then(success, failure);
      };

      $scope.$on('post.created', function(event, post){
        $scope.posts.unshift(post);
      })
      $scope.$on('post.deleted', function(event, post, post_index){
        $scope.posts.splice(post_index, 1);
      })
      $scope.$on('post.created.error', function(event, post){
        $scope.posts.shift();
      })
      
    }

  }
})();