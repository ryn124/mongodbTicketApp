var { User } = require('../models/user')
var { Artist } = require('../models/artist')
var { Show } = require('../models/show')
var { Ticket } = require('../models/ticket')
var { Tour } = require('../models/tour')

var users = [];
var artists = [];
var shows = [];
var tickets = [];
var tours = [];

// USERS
function _User(firstName, lastName, email, phone, dob, address1, address2, city, state, zip, cardNumber, cardType, security) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.phone = phone;
  this.dob = dob;
  this.address1 = address1;
  this.address2 = address2;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.cardNumber = cardNumber;
  this.cardType = cardType;
  this.security = security;
}

users.push(new _User("Mary", "Mara", "mary.mara@gmail.com", "444-444-4444", new Date('7/30/1987'), "104 Main Street", "104", "Costa Mesa", "TX", "94444", "1234-1234-1234-1223", "Visa", "001"))
users.push(new _User("Sherm", "Blank", "sherm.blank@gmail.com", "222-222-2222", new Date('2/28/1987'), "102 Main Street", "102", "Costa Mesa", "NY", "92222", "1234-1234-1234-1223", "Visa", "001"))
users.push(new _User("Billy", "Pruden", "billy.pruden@gmail.com", "111-111-1111", new Date('4/30/1987'), "101 Main Street", "101", "Costa Mesa", "CA", "91111", "1234-1234-1234-1223", "Visa", "001"))
users.push(new _User("Ford", "Gunner", "ford.gunner@gmail.com", "333-333-3333", new Date('3/30/1987'), "103 Main Street", "103", "Costa Mesa", "WA", "93333", "1234-1234-1234-1223", "Visa", "001"))
users.push(new _User("Fox", "Hoy", "fox.hoy@gmail.com", "555-555-5555", new Date('1/30/1987'), "105 Main Street", "105", "Costa Mesa", "FL", "95555", "1234-1234-1234-1223", "Visa", "001"))
users.push(new _User("Sally", "Fern", "sally.fern@gmail.com", "777-777-777", new Date('6/30/1987'), "106 Main Street", "106", "Costa Mesa", "TX", "96666", "1234-1234-1234-1223", "Visa", "001"))
users.push(new _User("Steve", "Aoki", "steve.aoki@gmail.com", "222-222-2222", new Date('8/30/1987'), "107 Main Street", "107", "Costa Mesa", "NY", "97777", "1234-1234-1234-1223", "Visa", "001"))
users.push(new _User("Kayli", "Nishime", "kayli.nishime@gmail.com", "111-111-1111", new Date('11/30/1987'), "109 Main Street", "109", "Costa Mesa", "CA", "99999", "1234-1234-1234-1223", "Visa", "001"))
users.push(new _User("Jenelle", "Smith", "jenelle.smith@gmail.com", "333-333-3333", new Date('12/30/1987'), "108 Main Street", "108", "Costa Mesa", "WA", "98888", "1234-1234-1234-1223", "Visa", "001"))
users.push(new _User("Sunni", "Hoy", "sunni.hoy@gmail.com", "555-555-5555", new Date('9/30/1987'), "110 Main Street", "110", "Costa Mesa", "FL", "90000", "1234-1234-1234-1223", "Visa", "001"))

// TICKETS
var _Ticket = function(date, price, section, row, seat) {
  this.date = date;
  this.price = price;
  this.section = section;
  this.row = row;
  this.seat = seat;
}

tickets.push(new _Ticket(new Date("5/10/2017"), "35", "307", "C", "1"))
tickets.push(new _Ticket(new Date("5/10/2017"), "35", "307", "C", "2"))
tickets.push(new _Ticket(new Date("5/10/2017"), "25", "506", "H", "27"))
tickets.push(new _Ticket(new Date("5/10/2017"), "25", "506", "H", "28"))
tickets.push(new _Ticket(new Date("5/10/2017"), "50", "102", "D", "12"))
tickets.push(new _Ticket(new Date("5/10/2017"), "50", "102", "D", "11"))

// ARTISTS
function _Artist(firstName, lastName, genre) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.genre = genre;
}

artists.push(new _Artist("Justin", "Timberlake", "Pop"))
artists.push(new _Artist("Beyonce", "", "Pop"))
artists.push(new _Artist("Adel", "", "Pop"))
artists.push(new _Artist("U2", "", "Rock"))
artists.push(new _Artist("Coldplay", "", "Alternative"))

// SHOWS
function _Show(tourName, location, date, ticketPrice) {
  this.tourName = tourName;
  this.location = location;
  this.date = date;
}

shows.push(new _Show("20/20 Experience", "New York", new Date('5/15/2018')))
shows.push(new _Show("20/20 Experience", "Baltimore", new Date('5/16/2018')))
shows.push(new _Show("20/20 Experience", "Kansas City", new Date('5/17/2018')))
shows.push(new _Show("20/20 Experience", "Dallas", new Date('5/18/2018')))

shows.push(new _Show("Formation Tour", "Los Angeles", new Date('6/15/2018')))
shows.push(new _Show("Formation Tour", "Sacramento", new Date('6/16/2018')))
shows.push(new _Show("Formation Tour", "Portland", new Date('6/17/2018')))
shows.push(new _Show("Formation Tour", "Seattle", new Date('6/18/2018')))

shows.push(new _Show("Hello", "London", new Date('7/15/2018')))
shows.push(new _Show("Hello", "London", new Date('7/16/2018')))
shows.push(new _Show("Hello", "London", new Date('7/17/2018')))
shows.push(new _Show("Hello", "London", new Date('7/18/2018')))

shows.push(new _Show("The Joshua Tree Tour", "Pasadena", new Date('8/15/2018')))
shows.push(new _Show("The Joshua Tree Tour", "Seattle", new Date('8/16/2018')))
shows.push(new _Show("The Joshua Tree Tour", "Vancouver", new Date('8/17/2018')))
shows.push(new _Show("The Joshua Tree Tour", "Portland", new Date('8/18/2018')))

shows.push(new _Show("A Head Full Of Dreams", "Montreal", new Date('9/15/2018')))
shows.push(new _Show("A Head Full Of Dreams", "Minneapolis", new Date('9/16/2018')))
shows.push(new _Show("A Head Full Of Dreams", "Omaha", new Date('9/17/2018')))
shows.push(new _Show("A Head Full Of Dreams", "Kansas City", new Date('9/18/2018')))

// console.log(users);
// console.log(shows);
// console.log(artist);
// console.log(tickets);
// console.log(tours);

var seedUsers = function(req, res) {
  for (var i = 0; i < users.length; i++) {
    var newUser = new User(users[i])

    newUser.save(function(err, user) {
        if(err) console.log("Error: " + err);
        if(user) console.log("User: " + user);
    })
  }
  res.json({message: "Seeding Users Complete"})
}

var seedArtists = function(req, res) {
  console.log("Artists array length: ", artists.length);
  
  for (var i = 0; i < artists.length; i++) {
    var newArtist = new Artist(artists[i])

    newArtist.save(function(err, artist) {
        if(err) console.log("Error: " + err);
        if(artist) console.log("Artist: " + artist);
    })
  }
  res.json({message: "Seeding Artists Complete"})
}

var seedTickets = function(req, res) {
  for (var i = 0; i < tickets.length; i++) {
    var newTicket = new Ticket(tickets[i])

    newTicket.save(function(err, ticket) {
        if(err) console.log("Error: " + err);
        if(ticket) console.log("Tickets: " + ticket);
    })
  }
  res.json({message: "Seeding Tickets Complete"})
}

var seedShows = function(req, res) {
  for (var i = 0; i < shows.length; i++) {
    var newShow = new Show(shows[i])

    newShow.save(function(err, show) {
        if(err) console.log("Error: " + err);
        if(show) console.log("Show: " + show);
    })
  }
  res.json({message: "Seeding Shows Complete"})
}

module.exports = {
  seedUsers: seedUsers,
  seedArtists: seedArtists,
  seedTickets: seedTickets,
  seedShows: seedShows
}
