const { Event } = require('../../models/Event');
const cloudinary = require('cloudinary').v2;
const cloudinarySetup = require('../../config/cloudinarySetup');


const createNewEvent = async (req, res) => {
    let {
        eventName,
        eventLocation,
        description,
        startDate,
        endDate,
        startTime,
        endTime,
        shareUrl,
        ticketType,
        private,
        donation,
        accountDetails,
        fashionType,
        categories
    } = req.body;


    let image = '';

    if (req.file) {
        await cloudinarySetup();

        const uploadedMedia = await cloudinary.uploader.upload(req.file.path, { resource_type: "auto" });
        image = uploadedMedia.secure_url;
    }
    let user = req.user._id

    const newEvent = new Event({
        poster : image,
        eventName,
        eventLocation,
        description,
        startDate,
        endDate,
        startTime,
        endTime,
        shareUrl,
        ticketType,
        private,
        donation,
        fashionType,
        accountDetails,
            categories,
        owner: user
    });

    if (!newEvent) return res.status(500).json({ success: false, msg: 'An error has occurred' })

    await newEvent.save();

    return res.status(201).json({
        success: true,
        msg: 'Event created',
        newEvent
    });
}

module.exports = createNewEvent;