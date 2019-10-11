const express = require('express');
const controllers = require('../controllers/user.controllers');
const validateMiddleware = require('../middlewares/validate.middleware');
const router = express.Router();

router.get('/', controllers.index);
router.get('/search', controllers.search);
router.get('/create', controllers.create);
router.post('/create', validateMiddleware.postCreate, controllers.postCreate);
module.exports = router;