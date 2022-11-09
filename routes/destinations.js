var express = require('express');
var router = express.Router();
var destinationsCtrl = require('../controllers/destinations')
const isLoggedIn = require("../config/auth");

router.get('/destinations/:id/destinations/new', isLoggedIn, destinationsCtrl.new)
router.post('/trips/:id/destinations', isLoggedIn, destinationsCtrl.create)

module.exports = router;