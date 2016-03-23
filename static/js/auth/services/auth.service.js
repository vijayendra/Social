(function(){
  'use strict';
  angular
     .module('social.auth.services')
     .factory('Authentication', Authentication);

  Authentication.$inject = ['$cookies', '$http'];
  function Authentication($cookies, $http){
    var vm = this;
    return {
      login: login,
      logout: logout,
      register: register,
      isAuthenticated: isAuthenticated,
      setAuthenticatedAccount: setAuthenticatedAccount,
      getAuthenticatedAccount: getAuthenticatedAccount,
      unauthenticate: unauthenticate
    };

    function isAuthenticated(){
      return !!$cookies.authenticatedAccount;
    }

    function getAuthenticatedAccount(){
      var data;
      if(isAuthenticated())
        data = JSON.parse($cookies.authenticatedAccount);
      return data;
    }

    function setAuthenticatedAccount(data){
      $cookies.authenticatedAccount = JSON.stringify(data);
    }

    function unauthenticate(){
      delete $cookies.authenticatedAccount;
    }

    function login(username, password){
      return $http.post('/api/login/', {username: username, password: password}
      ).then(success, failure);

      function success(data, status, headers, config){
        console.log(data);
        $cookies.authenticatedAccount = JSON.stringify(data);
        window.location = "/";
      };
      function failure(data, status, headers, config){
        console.error('Login failure');
      };
    }

    function logout(){
      return $http.post('/api/logout/', {}
      ).then(success, failure);

      function success(data, status, headers, config){
        delete $cookies.authenticatedAccount;
        window.location = "/";
      };
      function failure(data, status, headers, config){
        console.error('Logout failure');
      };
      
    }

    function register(username, email, password){
      return $http.post('/api/users/', {
        username: username,
        email: email,
        password: password
      }).then(success, failure);

      function success(data, status, headers, config){
        console.log("Success");
        window.location = "/login";
      };
      function failure(data, status, headers, config){
        console.error('Registration failure');
      };
      
    }

    

  }

})();