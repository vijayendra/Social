(function(){
  'use strict';

  angular
  .module('social.comments.services')
  .factory('Comments', Comments);

  Comments.$inject = ['$http'];
  function Comments($http){
    return {
      get: get,
      create: create
    };
    function get(post_id){
      return $http.get('/api/posts/'+ post_id +'/comments/');
    };
    function create(post_id, parent, description){
      var data = {parent: parent, description: description}
      return $http.post('/api/posts/'+ post_id +'/comments/', data);
    }
  }

})();