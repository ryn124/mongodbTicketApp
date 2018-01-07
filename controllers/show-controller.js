var { Show } = require('../models/show')
var _ = require('lodash')

function index(req, res) {
  Show
  .find()
  .exec(function(err, shows) {
    if(err) {
      res.status(500).json({errorMessage: `Could not find show because ${err}`})
    } else if(!shows) {
      res.status(404).json({errorMessage: `No shows found`})
    }
    else {
      res.json(shows)
    }
  })
}

function create(req, res) {
  Show
  .find()
  .where('tourName').equals(req.body.tourName)
  .where('date').equals(req.body.date)
  .exec(function(err, show) {
    if (show.length != 0) {
      res.status(409).json({errorMessage: `A show already exists on ${req.body.date} with the name ${req.body.tourName}`});
    }
    else if (err) {
      res.status(500).json({errorMessage: `Could not perform task because: ${err}`});
    }
    else {
      var newShow = new Show(req.body)
      newShow.save(function(err, show) {
        if(err) {
          res.status(500).json({errorMessage: `There was an error with our DB: ${err}`});
        }
        else {
          res.json(show)
        }
      })
    };
  })
}

function show(req, res) {
  Show
  .findById(req.params.id)
  .exec(function(err, show) {
    if(err) {
      res.status(500).json({errorMessage: `Could not find show because ${err}`})
    } else if(!show) {
      res.status(404).json({errorMessage: `No show was found at id: ${req.params.id}`})
    }
    else {
      res.json(show)
    }
  })
}

function update(req, res) {
  var body = _.pick(req.body, ["date", "location", "tickets"])

  // $set allows us to set the body as the new value of the record
  // {new: true} means that what gets returned in the callback is the new record - defaults to old.
  Show
  .findByIdAndUpdate(req.params.id, {$set: body}, {new: true}, function(err, show) {
    if(err) {
      res.status(500).json({errorMessage: `There was an error with our DB: ${err}`})
    }
    else if(!show) {
      res.status(404).json({errorMessage: `Show Record could not be found`})
    }
    else {
      res.json(show)
    }
  })
}

function destroy(req, res) {
  Show
  .findByIdAndRemove(req.params.id, function(err, show) {
    if(err) {
      res.status(500).json({errorMessage: `Could not perform delete because: ${err}`});
    } else if (!show) {
      res.status(404).json({errorMessage: `No show was found at id: ${req.params.id}`})
    }
    else {
      res.json(show)
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
