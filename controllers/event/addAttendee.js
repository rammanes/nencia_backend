const { Event } = require('../../models/Event');


const addAttendee = async (req, res) => {


    let user = req.user._id
    let { eventId } = req.params;
    let event = await Event.findOne({_id: eventId});
    if (!event) return res.status(500).json({ success: false, msg: 'No Event found' });



    event.attendees.push({ 
        user
     });
    await event.save();
    // await newEvent.save();

    return res.status(201).json({
        success: true,
        msg: 'Event created',
    event
    });
}

module.exports = addAttendee;