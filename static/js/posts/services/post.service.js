(function(){
  'use strict';

  angular
  .module('social.posts.services')
  .factory('Post', Post);

  Post.$inject = ['$http'];
  function Post($http){
    return {
      addComment: addComment,
      getComments: getComments
    };
    function getComments(post_id){
      return $http.get('/api/posts/'+post_id+'/comments/');
    };
    function addComment(post_id, parent_id, comment){
      var url = '/api/posts/'+post_id+'/comments/';
      return $http.post(url, {parent: parent_id, description: comment})
    };
  }

})();