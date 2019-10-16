const express = require('express');
const controllers = require('../controllers/cart.controllers')
const router = express.Router();

router.get('/add/:productId', controllers.addToCart)


module.exports = router;