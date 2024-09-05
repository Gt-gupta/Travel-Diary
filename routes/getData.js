const express = require('express');
const router = express.Router();
const get_controller = require('../controllers/getData');

router.post('/get_posts',get_controller.getPosts);
router.post('/get_trips',get_controller.getTrips);

module.exports = router;