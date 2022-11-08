var express = require('express');
var router = express.Router();
var tripsCtrl = require('../controllers/trips')
router.post('/', tripsCtrl.create)

module.exports = router;