const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let eventSchema = new Schema({
  poster: String,
  eventName: String,
  eventLocation: String,
  description: String,
  startDate: {
    type: Date,
  required: true
},
  endDate: {
    type: Date,
  required: true
},
  startTime: {
    type: Date,
  required: true
},
  endTime: {
    type: Date,
  required: true
},
  shareUrl: String,
  ticketType: {
    type: String,
    enum: ['Free', 'Paid'],
    default: 'Free'
}, 
private: Boolean,
donation: Boolean,
accountDetails:{
bankName: String,
accountNumber: String,
accountName: String
},
fashionType: {
    type: String,
    enum: ['Swag', 'Traditional'],
    default: 'Swag'
},
categories:[
    {
        totalTicket: String,
        categoryName: String,
        categoryPrice: String,
        ticketDescription: String,
        ticketPerks: String
    }
],
  owner:{
    type: Schema.Types.ObjectId,
    ref: 'user'
},
attendees: [{
  user: {type: Schema.Types.ObjectId, ref: 'user'},
}]

}, { timestamps: true });

module.exports =  {
  Event: model('event', eventSchema)
}