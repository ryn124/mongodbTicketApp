var mongoose = require('mongoose');
var Schema = mongoose.Schema

var { ticketSchema } = require('./ticket')

var userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 10,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 10,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  phone: String,
  dob: Date,
  address1: String,
  address2: String,
  city: String,
  state: String,
  zip: String,
  cardNumber: String,
  cardType: String,
  security: String,
  tickets: [ticketSchema]
})

var User = mongoose.model('User', userSchema)

module.exports = {
  User: User,
  userSchema: userSchema
}
