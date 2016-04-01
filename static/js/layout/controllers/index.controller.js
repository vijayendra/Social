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

    $scope.hello = function(){
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
      Posts.all().then(success, failure);
      function success(data, status, headers, config){
        $scope.posts = data.data;
      }
      function failure(data, status, headers, config){
        console.error('Failed to load posts');
      }

      $scope.$on('post.created', function(event, post){
        console.log('unshifting post');
        console.log(post);
        $scope.posts.unshift(post);
        console.log($scope.posts);
      })
      $scope.$on('post.created.error', function(event, post){
        $scope.posts.shift();
      })
      
    }

  }
})();