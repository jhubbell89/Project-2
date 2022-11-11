var express = require('express');
var router = express.Router();
var destinationsCtrl = require('../controllers/destinations')
const isLoggedIn = require("../config/auth");

router.get('/destinations/index', isLoggedIn, destinationsCtrl.new)
router.post('/destinations/index', isLoggedIn, destinationsCtrl.create)
router.post('/trips/:id/destinations', isLoggedIn, destinationsCtrl.addToPlace)
router.delete('destinations/:id',isLoggedIn, destinationsCtrl.delete )

module.exports = router;