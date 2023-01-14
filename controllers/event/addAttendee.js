const { Event } = require("../../models/Event");
const addAttendee = async (req, res) => {
  let user = req.user._id;
  let { eventId } = req.params;
  let event = await Event.findOne({ _id: eventId });
  let attendee = event.attendees.filter((data) => data.user == user);

  // let attendees = event.attendees[0].user
  // console.log(opp)
  if (!event)
    return res.status(500).json({ success: false, msg: "No Event found" });

  if (attendee.length == 0) {
    await event.updateOne({ $push: { attendees: { user: user } } });
    return res.status(201).json({
      success: true,
      msg: "Attendee Successfully Added",
    });
  } else {
    await event.updateOne({ $pull: { attendees: { user: user } } });
    return res.status(201).json({
      success: true,
      msg: "Attendee Removed",
    });
  }
};

module.exports = addAttendee;
