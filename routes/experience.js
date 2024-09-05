const express = require('express');
const router = express.Router();
const create_controller = require('../controllers/experience');

router.post('/create_experience',create_controller.createPost);
router.post('/create_trip',create_controller.createTrip);

module.exports = router;
