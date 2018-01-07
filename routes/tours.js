var express = require('express');
var router = express.Router();

var toursController = require("../controllers/tour-controller.js")

router.get('/', toursController.index);
router.post('/', toursController.create);
router.get('/:id', toursController.show);
router.put('/:id', toursController.update);
router.delete('/:id', toursController.destroy);

module.exports = router;
