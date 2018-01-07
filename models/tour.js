var mongoose = require('mongoose');
var Schema = mongoose.Schema

var { artistSchema } = require('./artist')
var { showSchema } = require('./show')

var tourSchema = new Schema({
  tourName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
    trim: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  artists: [artistSchema],
  shows: [showSchema]
})

var Tour = mongoose.model('Tour', tourSchema)

module.exports = Tour;
