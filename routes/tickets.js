var express = require('express');
var router = express.Router();

var ticketsController = require("../controllers/tickets-controller.js")

router.get('/', ticketsController.index);
router.post('/', ticketsController.create);
router.get('/:id', ticketsController.show);
router.put('/:id', ticketsController.update);
router.delete('/:id', ticketsController.destroy);

module.exports = router;
