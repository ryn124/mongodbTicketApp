app.service("tourService", function($http) {

  this.getTours = function() {
    return $http.get('./api/tours')
  }

  this.getTourById = function(id, cb) {
    if(id == "" || id == undefined || id == null) {
      var tour = {
        tourName: "",
        startDate: "",
        endDate: ""
      }
      cb(tour)
    }
    else {
      $http.get('./api/tours/' + id)
        .then(function(response) {
          console.log(response.data);
          cb(response.data);
        },
        function(error) {
          console.log(error);
        })
    }
  }

  this.addTour = function(tour) {
    return $http.post('./api/tours', tour)
  }

  this.updateTour = function(tour) {
    return $http.put('./api/tours/' + tour._id, tour)
  }

  this.deleteTour = function(id) {
    return $http.delete('./api/tours/' + id)
  }
})
