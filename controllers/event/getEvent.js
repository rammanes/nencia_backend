const { Event } = require('../../models/Event');

const getAllEvents = async(req, res) => {
    try { 
        const allEvents = await Event.find({}).sort({_id: -1}).populate('attendees.user').exec()
        if (!allEvents) return res.status(500).json({ success: false, msg: 'No Events found' });

        return res.status(200).json({
            success: true,
            msg: 'All Events',
            allEvents
        })

    } catch (err) {``
        return res.status(500).json({ success: false, msg: err.message });
    }
}

module.exports = getAllEvents;