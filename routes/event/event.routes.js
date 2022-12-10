const express = require('express');
const router = express.Router();
const upload = require('../../config/multerSetup');
const verifyToken = require('../../middlewares/authjwt')
const createNewEvent = require('../../controllers/event/createEvent');
const getAllEvents = require('../../controllers/event/getEvent')
const addAttendee = require('../../controllers/event/addAttendee')

router.route('/create-event')
    .post(verifyToken, upload.single('eventPoster'), createNewEvent)
    router.route('/add-attendee/:eventId')
    .post(verifyToken, addAttendee)

    router.route('/get-events')
    .get(getAllEvents);


module.exports = router;