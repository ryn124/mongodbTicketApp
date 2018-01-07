var express = require('express');
var router = express.Router();

var artistsController = require("../controllers/artist-controller.js")

router.get('/', artistsController.index);
router.post('/', artistsController.create);
router.get('/:id', artistsController.show);
router.put('/:id', artistsController.update);
router.delete('/:id', artistsController.destroy);

module.exports = router;
