const express = require('express');
const controllers = require('../controllers/user.controllers');
const validateMiddleware = require('../middlewares/validate.middleware');
var multer  = require('multer')
var upload = multer({ dest: './public/uploads/' })
const router = express.Router();

router.get('/', controllers.index);
router.get('/search', controllers.search);
router.get('/create', controllers.create);
router.post('/create', 
    upload.single('avatar'),
    validateMiddleware.postCreate, 
    controllers.postCreate
    );
router.get('/:id', controllers.get)
module.exports = router;