var express = require('express');
var router = express.Router();
var gearsCtrl = require('../controllers/gears')

router.post('/', gearsCtrl.create)
module.exports = router;