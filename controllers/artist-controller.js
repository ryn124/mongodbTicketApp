var { Artist } = require('../models/artist')
var _ = require('lodash')

function index(req, res) {
  Artist
  .find()
  .exec(function(err, artists) {
    if(err) {
      res.status(500).json({errorMessage: `Could not find artist because ${err}`})
    } else if(!artists) {
      res.status(404).json({errorMessage: `No artists found`})
    }
    else {
      res.json(artists)
    }
  })
}

function create(req, res) {
  Artist
  .find()
  .where('firstName').equals(req.body.firstName)
  .where('lastName').equals(req.body.lastName)
  .exec(function(err, artist) {
    if (artist.length != 0) {
      res.status(409).json({errorMessage: `A artist already exists with that name`});
    }
    else if (err) {
      res.status(500).json({errorMessage: `Could not perform task because: ${err}`});
    }
    else {
      var newArtist = new Artist(req.body)
      newArtist.save(function(err, artist) {
        if(err) {
          res.status(500).json({errorMessage: `There was an error with our DB: ${err}`});
        }
        else {
          res.json(artist)
        }
      })
    };
  })
}

function show(req, res) {
  console.log("REQ PARAMS: ", req.params.id);
  Artist
  .findById(req.params.id)
  .exec(function(err, artist) {
    if(err) {
      res.status(500).json({errorMessage: `Could not find artist because ${err}`})
    } else if(!artist) {
      res.status(404).json({errorMessage: `No artist was found at id: ${req.params.id}`})
    }
    else {
      res.json(artist)
    }
  })
}

function update(req, res) {
  var body = _.pick(req.body, ["firstName", "lastName", "genre"])

  // $set allows us to set the body as the new value of the record
  // {new: true} means that what gets returned in the callback is the new record - defaults to old.
  Artist
  .findByIdAndUpdate(req.params.id, {$set: body}, {new: true}, function(err, artist) {
    if(err) {
      res.status(500).json({errorMessage: `There was an error with our DB: ${err}`})
    }
    else if(!artist) {
      res.status(404).json({errorMessage: `Artist Record could not be found`})
    }
    else {
      res.json(artist)
    }
  })
}

function destroy(req, res) {
  Artist
  .findByIdAndRemove(req.params.id, function(err, artist) {
    if(err) {
      res.status(500).json({errorMessage: `Could not perform delete because: ${err}`});
    } else if (!artist) {
      res.status(404).json({errorMessage: `No artist was found at id: ${req.params.id}`})
    }
    else {
      res.json(artist)
    }
  })
}

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
}
