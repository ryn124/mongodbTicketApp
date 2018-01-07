app.service("userService", function($http) {

  this.getUsers = function() {
    return $http.get('./api/users')
  }

  this.getUserById = function(id, cb) {
    if(id == "" || id == undefined || id == null) {
      var user = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dob: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        zip: "",
        cardNumber: "",
        cardType: "",
        security: ""
      }
      cb(user)
    }
    else {
      $http.get('./api/users/' + id)
        .then(function(response) {
          console.log(response.data);
          cb(response.data);
        },
        function(error) {
          console.log(error);
        })
    }
  }

  this.addUser = function(user) {
    return $http.post('./api/users', user)
  }

  this.updateUser = function(user) {
    return $http.put('./api/users/' + user._id, user)
  }

  this.deleteUser = function(id) {
    return $http.delete('./api/users/' + id)
  }
})
