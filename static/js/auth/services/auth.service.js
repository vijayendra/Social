(function(){
  'use strict';
  angular
     .module('social.auth.services')
     .factory('Authentication', Authentication);

  Authentication.$inject = ['$cookies', '$http'];
  function Authentication($cookies, $http){
    var vm = this;
    return {};
  }

})();