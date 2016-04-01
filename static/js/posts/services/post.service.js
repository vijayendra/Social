(function(){
  'use strict';

  angular
  .module('social.posts.services')
  .factory('Post', Post);

  Post.$inject = ['$http', 'Comments'];
  function Post($http, Comments){
    return {
      addComment: addComment,
      getComments: getComments,
      deletePost: deletePost
    };
    function getComments(post_id){
      return Comments.get(post_id);
    };
    function addComment(post_id, parent_id, comment){
      return Comments.create(post_id, parent_id, comment);
    };
    function deletePost(post_id, post_index){
      return $http.delete('/api/posts/'+post_id);
    }
  }

})();