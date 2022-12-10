const { Event } = require('../../models/Event');


const addAttendee = async (req, res) => {


    let user = req.user._id
    let { eventId } = req.params;
    let event = await Event.findOne({_id: eventId});
    if (!event) return res.status(500).json({ success: false, msg: 'No Event found' });


    const newEvent = new Event({
        attendees:[{
            user
        }] 
    });

    if (!newEvent) return res.status(500).json({ success: false, msg: 'An error has occurred' })

    await newEvent.save();

    return res.status(201).json({
        success: true,
        msg: 'Event created',
        newEvent
    });
}

module.exports = addAttendee;