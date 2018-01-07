var Tour = require('../models/tour')
var _ = require('lodash')

function index(req, res) {
  Tour
  .find()
  .exec(function(err, tours) {
    if(err) {
      res.status(500).json({errorMessage: `Could not find tour because ${err}`})
    } else if(!tours) {
      res.status(404).json({errorMessage: `No tours found`})
    }
    else {
      res.json(tours)
    }
  })
}

function create(req, res) {
  Tour
  .find()
  .where('tourName').equals(req.body.tourName)
  .exec(function(err, tour) {
    if (tour.length != 0) {
      res.status(409).json({errorMessage: `A tour already exists with the name ${req.body.tourName}`});
    }
    else if (err) {
      res.status(500).json({errorMessage: `Could not perform task because: ${err}`});
    }
    else {
      var newTour = new Tour(req.body)
      newTour.save(function(err, tour) {
        if(err) {
          res.status(500).json({errorMessage: `There was an error with our DB: ${err}`});
        }
        else {
          res.json(tour)
        }
      })
    };
  })
}

function show(req, res) {
  Tour
  .findById(req.params.id)
  .exec(function(err, tour) {
    if(err) {
      res.status(500).json({errorMessage: `Could not find tour because ${err}`})
    } else if(!tour) {
      res.status(404).json({errorMessage: `No tour was found at id: ${req.params.id}`})
    }
    else {
      res.json(tour)
    }
  })
}

function update(req, res) {
  var body = _.pick(req.body, ["tourName", "startDate", "endDate", "artists", "show"])

  // $set allows us to set the body as the new value of the record
  // {new: true} means that what gets returned in the callback is the new record - defaults to old.
  Tour
  .findByIdAndUpdate(req.params.id, {$set: body}, {new: true}, function(err, tour) {
    if(err) {
      res.status(500).json({errorMessage: `There was an error with our DB: ${err}`})
    }
    else if(!tour) {
      res.status(404).json({errorMessage: `Tour Record could not be found`})
    }
    else {
      res.json(tour)
    }
  })
}

function destroy(req, res) {
  Tour
  .findByIdAndRemove(req.params.id, function(err, tour) {
    if(err) {
      res.status(500).json({errorMessage: `Could not perform delete because: ${err}`});
    } else if (!tour) {
      res.status(404).json({errorMessage: `No tour was found at id: ${req.params.id}`})
    }
    else {
      res.json(tour)
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
