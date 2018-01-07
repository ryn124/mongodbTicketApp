app.controller("showController", function($scope, $state, $stateParams, showService) {

  $scope.showSearch = "";

  if($stateParams.id == "" || $stateParams.id == undefined || $stateParams.id == null) {
    $scope.submitButton = true;
    $scope.heading = "Create A Show!"

    showService.getShowById($stateParams.id, function(show) {
      $scope.show = show;
    })
  }
  else {
    $scope.submitButton = false;
    $scope.heading = "Update Show"

    showService.getShowById($stateParams.id, function(show) {
      $scope.show = show;
    })
  }

  showService.getShows()
    .then(function(response) {
      $scope.shows = response.data
    },
    function(error) {
      console.log(error);
    })

  $scope.addShow = function() {
    showService.addShow($scope.show)
      .then(function(response) {
        console.log(response.data);
        $state.go('showsShow', {id: response.data._id})
      },
      function(error) {
        console.log(error);
      })
  }

  $scope.updateShow = function() {
    showService.updateShow($scope.show)
      .then(function(response) {
        $state.go('showsShow', {id: response.data._id})
      },
      function(error) {
        console.log(error);
      })
  }

  $scope.deleteShow = function() {
    showService.deleteShow($stateParams.id)
      .then(function(response) {
        $state.go('shows')
      },
      function(error) {
        console.log(error);
      })
  }

});
