app.controller("artistController", function($scope, $state, $stateParams, artistService) {

  $scope.artistSearch = "";

  if($stateParams.id == "" || $stateParams.id == undefined || $stateParams.id == null) {
    $scope.submitButton = true;
    $scope.heading = "Create An Artist!"

    artistService.getArtistById($stateParams.id, function(artist) {
      $scope.artist = artist;
    })
  }
  else {
    $scope.submitButton = false;
    $scope.heading = "Update Artist"

    artistService.getArtistById($stateParams.id, function(artist) {
      $scope.artist = artist;
    })
  }

  artistService.getArtists()
    .then(function(response) {
      $scope.artists = response.data
    },
    function(error) {
      console.log(error);
    })

  $scope.addArtist = function() {
    artistService.addArtist($scope.artist)
      .then(function(response) {
        console.log(response.data);
        $state.go('artistsShow', {id: response.data._id})
      },
      function(error) {
        console.log(error);
      })
  }

  $scope.updateArtist = function() {
    artistService.updateArtist($scope.artist)
      .then(function(response) {
        $state.go('artistsShow', {id: response.data._id})
      },
      function(error) {
        console.log(error);
      })
  }

  $scope.deleteArtist = function() {
    artistService.deleteArtist($stateParams.id)
      .then(function(response) {
        $state.go('artists')
      },
      function(error) {
        console.log(error);
      })
  }

});
