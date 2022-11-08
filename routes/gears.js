var express = require('express');
var router = express.Router();
var gearsCtrl = require('../controllers/gears')

router.post('/trips/:id/gears', gearsCtrl.create)

module.exports = router;