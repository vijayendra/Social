(function(){
  'use strict';
  angular
   .module('social.layout.controllers')
   .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', 'Authentication', 'Posts'];
  function IndexController($scope, Authentication, Posts){
    $scope.isAuthenticated = function(){
      return Authentication.isAuthenticated();
    }
    $scope.posts = [];
    activate();

    function activate(){
      Posts.all().then(success, failure);
      function success(data, status, headers, config){
        $scope.posts = data.data;
      }
      function failure(data, status, headers, config){
        console.error(data.error);
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