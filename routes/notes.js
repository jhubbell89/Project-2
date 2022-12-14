var express = require('express');
var router = express.Router();
var notesCtrl = require('../controllers/notes')
const isLoggedIn = require("../config/auth");

router.post('/trips/:id/notes', isLoggedIn, notesCtrl.create)

module.exports = router;