app.controller("tourController", function($scope, $state, $stateParams, tourService) {

  $scope.tourSearch = "";

  if($stateParams.id == "" || $stateParams.id == undefined || $stateParams.id == null) {
    $scope.submitButton = true;
    $scope.heading = "Create A Tour!"

    tourService.getTourById($stateParams.id, function(tour) {
      $scope.tour = tour;
    })
  }
  else {
    $scope.submitButton = false;
    $scope.heading = "Update Tour"

    tourService.getTourById($stateParams.id, function(tour) {
      $scope.tour = tour;
    })
  }

  tourService.getTours()
    .then(function(response) {
      $scope.tours = response.data
    },
    function(error) {
      console.log(error);
    })

  $scope.addTour = function() {
    tourService.addTour($scope.tour)
      .then(function(response) {
        console.log(response.data);
        $state.go('toursShow', {id: response.data._id})
      },
      function(error) {
        console.log(error);
      })
  }

  $scope.updateTour = function() {
    console.log("this hit", $scope.tour);
    tourService.updateTour($scope.tour)
      .then(function(response) {
        $state.go('toursShow', {id: response.data._id})
      },
      function(error) {
        console.log(error);
      })
  }

  $scope.deleteTour = function() {
    tourService.deleteTour($stateParams.id)
      .then(function(response) {
        $state.go('tours')
      },
      function(error) {
        console.log(error);
      })
  }

});
