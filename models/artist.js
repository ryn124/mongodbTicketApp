var mongoose = require('mongoose');
var Schema = mongoose.Schema

var artistSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
    trim: true
  },
  lastName: {
    type: String,
    maxlength: 100,
    trim: true
  },
  genre: {
    type: String,
    required: true
  }
})

var Artist = mongoose.model('Artist', artistSchema)

module.exports = {
  Artist: Artist,
  artistSchema: artistSchema
}
