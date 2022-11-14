var express = require('express');
var router = express.Router();
var tripsCtrl = require('../controllers/trips')
const isLoggedIn = require("../config/auth");

router.get('/new', isLoggedIn, tripsCtrl.new)
router.post('/', isLoggedIn, tripsCtrl.create)
router.get('/index', isLoggedIn, tripsCtrl.index)
router.get('/:id', isLoggedIn, tripsCtrl.show)
router.delete('/:id', isLoggedIn, tripsCtrl.delete)

module.exports = router;