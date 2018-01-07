var express = require('express');
var router = express.Router();

var seed = require("../config/seed.js")

router.get('/users', seed.seedUsers);
router.get('/artists', seed.seedArtists);
router.get('/tickets', seed.seedTickets);
router.get('/shows', seed.seedShows);
// router.get('/tours', seed.seedTours);

module.exports = router;
