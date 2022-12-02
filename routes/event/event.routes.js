const express = require('express');
const router = express.Router();
const upload = require('../../config/multerSetup');
const verifyToken = require('../../middlewares/authjwt')
const createNewEvent = require('../../controllers/event/createEvent');
const getAllEvents = require('../../controllers/event/getEvent')

router.route('/create-event')
    .post(verifyToken, upload.single('eventPoster'), createNewEvent)
    router.route('/get-events')
    .get(getAllEvents);


module.exports = router;