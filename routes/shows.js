var express = require('express');
var router = express.Router();

var showsController = require("../controllers/show-controller.js")

router.get('/', showsController.index);
router.post('/', showsController.create);
router.get('/:id', showsController.show);
router.put('/:id', showsController.update);
router.delete('/:id', showsController.destroy);

module.exports = router;
