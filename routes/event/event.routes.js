const express = require('express');
const router = express.Router();
const upload = require('../../config/multerSetup');
const verifyToken = require('../../middlewares/authjwt')
const createNewEvent = require('../../controllers/event/createEvent');


router.route('/create-event')
    .post(verifyToken, upload.single('eventPoster'), createNewEvent)


module.exports = router;