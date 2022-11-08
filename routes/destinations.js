var express = require('express');
var router = express.Router();
var destinationsCtrl = require('../controllers/destinations')

router.get('/trips/:id/destinations/new', destinationsCtrl.new)
router.post('/trips/:id/destinations', destinationsCtrl.create)

module.exports = router;