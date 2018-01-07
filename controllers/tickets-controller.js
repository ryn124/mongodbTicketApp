var { Ticket } = require('../models/ticket')
var _ = require('lodash')

function index(req, res) {
  Ticket
  .find()
  .exec(function(err, tickets) {
    if(err) {
      res.status(500).json({errorMessage: `Could not find ticket because ${err}`})
    } else if(!tickets) {
      res.status(404).json({errorMessage: `No tickets found`})
    }
    else {
      res.json(tickets)
    }
  })
}

function create(req, res) {
  Ticket
  .find()
  .exec(function(err, ticket) {
    if (err) {
      res.status(500).json({errorMessage: `Could not perform task because: ${err}`});
    }
    else {
      var newTicket = new Ticket(req.body)
      newTicket.save(function(err, ticket) {
        if(err) {
          res.status(500).json({errorMessage: `There was an error with our DB: ${err}`});
        }
        else {
          res.json(ticket)
        }
      })
    };
  })
}

function show(req, res) {
  Ticket
  .findById(req.params.id)
  .exec(function(err, ticket) {
    if(err) {
      res.status(500).json({errorMessage: `Could not find ticket because ${err}`})
    } else if(!ticket) {
      res.status(404).json({errorMessage: `No ticket was found at id: ${req.params.id}`})
    }
    else {
      res.json(ticket)
    }
  })
}

function update(req, res) {
  var body = _.pick(req.body, ["date", "price", "section", "row", "seat"])

  // $set allows us to set the body as the new value of the record
  // {new: true} means that what gets returned in the callback is the new record - defaults to old.
  Ticket
  .findByIdAndUpdate(req.params.id, {$set: body}, {new: true}, function(err, ticket) {
    if(err) {
      res.status(500).json({errorMessage: `There was an error with our DB: ${err}`})
    }
    else if(!ticket) {
      res.status(404).json({errorMessage: `Ticket Record could not be found`})
    }
    else {
      res.json(ticket)
    }
  })
}

function destroy(req, res) {
  Ticket
  .findByIdAndRemove(req.params.id, function(err, ticket) {
    if(err) {
      res.status(500).json({errorMessage: `Could not perform delete because: ${err}`});
    } else if (!ticket) {
      res.status(404).json({errorMessage: `No ticket was found at id: ${req.params.id}`})
    }
    else {
      res.json(ticket)
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
