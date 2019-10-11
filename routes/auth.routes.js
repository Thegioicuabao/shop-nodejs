const express = require('express');
const controllers = require('../controllers/auth.controllers')
const router = express.Router();

router.get('/login', controllers.index);
router.post('/login', controllers.postLogin);
module.exports = router;