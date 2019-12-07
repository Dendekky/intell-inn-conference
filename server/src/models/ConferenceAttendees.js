const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Attendee = new Schema({
    name: {
      type: 'String',
      required: true,
      trim: true
    },
    email: {
      type: 'String',
      required: true,
      trim: true,
      unique: true
    },
    category: {
      type: 'String',
      required: true,
      trim: true,
      unique: true
    }
  });

Attendee
.virtual('url')
.get(function () {
  return '/attendees/' + this._id;
});


  module.exports = mongoose.model('Attendee', Attendee);