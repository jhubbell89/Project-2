var express = require('express');
var router = express.Router();
var tripsCtrl = require('../controllers/trips')
const isLoggedIn = require("../config/auth");

router.get('/new', isLoggedIn, tripsCtrl.new)
// router.post('/', tripsCtrl.create)
// router.get('/index', tripsCtrl.index)
// router.get('/:id', tripsCtrl.show)

module.exports = router;