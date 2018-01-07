app.service("showService", function($http) {

  this.getShows = function() {
    return $http.get('./api/shows')
  }

  this.getShowById = function(id, cb) {
    if(id == "" || id == undefined || id == null) {
      var show = {
        tourName: "",
        date: "",
        location: ""
      }
      cb(show)
    }
    else {
      $http.get('./api/shows/' + id)
        .then(function(response) {
          console.log(response.data);
          cb(response.data);
        },
        function(error) {
          console.log(error);
        })
    }
  }

  this.addShow = function(show) {
    return $http.post('./api/shows', show)
  }

  this.updateShow = function(show) {
    return $http.put('./api/shows/' + show._id, show)
  }

  this.deleteShow = function(id) {
    return $http.delete('./api/shows/' + id)
  }
})
