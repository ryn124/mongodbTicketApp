app.service("artistService", function($http) {

  this.getArtists = function() {
    return $http.get('./api/artists')
  }

  this.getArtistById = function(id, cb) {
    if(id == "" || id == undefined || id == null) {
      var artist = {
        firstName: "",
        lastName: "",
        genre: ""
      }
      cb(artist)
    }
    else {
      $http.get('./api/artists/' + id)
        .then(function(response) {
          console.log(response.data);
          cb(response.data);
        },
        function(error) {
          console.log(error);
        })
    }
  }

  this.addArtist = function(artist) {
    return $http.post('./api/artists', artist)
  }

  this.updateArtist = function(artist) {
    return $http.put('./api/artists/' + artist._id, artist)
  }

  this.deleteArtist = function(id) {
    return $http.delete('./api/artists/' + id)
  }
})
