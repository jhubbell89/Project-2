var express = require('express');
var router = express.Router();
var tripsCtrl = require('../controllers/trips')
const isLoggedIn = require("../config/auth");

router.get('/index', tripsCtrl.index)
router.get('/new', isLoggedIn, tripsCtrl.new)
// router.get('/:id', tripsCtrl.show)
// router.post('/', tripsCtrl.create)

module.exports = router;