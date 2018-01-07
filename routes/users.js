var express = require('express');
var router = express.Router();

var usersController = require("../controllers/user-controller.js")

router.get('/', usersController.index);
router.post('/', usersController.create);
router.get('/:id', usersController.show);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.destroy);

module.exports = router;
