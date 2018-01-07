var mongoose = require('mongoose');
var Schema = mongoose.Schema

var { ticketSchema } = require('./ticket')

var showSchema = new Schema({
  tourName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  tickets: [ticketSchema]
})

var Show = mongoose.model('Show', showSchema)

module.exports = {
  Show: Show,
  showSchema: showSchema
}
