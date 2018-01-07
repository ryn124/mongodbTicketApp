var mongoose = require('mongoose');
var Schema = mongoose.Schema

var ticketSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  section: String,
  row: String,
  seat: String
})

var Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = {
  Ticket: Ticket,
  ticketSchema: ticketSchema
}
