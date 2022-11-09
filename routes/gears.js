var express = require('express');
var router = express.Router();
var gearsCtrl = require('../controllers/gears')
const isLoggedIn = require("../config/auth");

router.post('/trips/:id/gears', isLoggedIn, gearsCtrl.create)

module.exports = router;