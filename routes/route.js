const express = require('express');
const router = express.Router();
const controller = require('../controllers/recordcontroller');

router.get('/', controller.getAll);
router.get('/Add', controller.getAdd);
router.get('/Update', controller.getUpdate);

router.post('/Add', controller.postAdd);
router.post('/Update', controller.postUpdate);
router.post('/Delete', controller.postDelete);

module.exports = router;