(function(){
  'use strict';

  angular
  .module('social.posts.services')
  .factory('Posts', Posts);

  Posts.$inject = ['$http'];
  function Posts($http){
    return {
      all: all,
      get: get,
      create: create
    };
    function all(){
      return $http.get('/api/posts/');
    };
    function get(id){
      return $http.get('/my/posts/');
    };
    function create(title, description){
      return $http.post('/api/posts/', {title: title, description: description});
    }
  }

})();