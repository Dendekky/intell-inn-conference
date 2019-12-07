const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Talk = new Schema({
    talk_title: {
      type: 'String',
      required: true,
      trim: true,
      unique: true
    },
    talk_time: {
      type: 'String',
      required: true,
      trim: true
    },
    talk_synopsis:{
      type: 'String',
      required: true
    }
  });

Talk
.virtual('url')
.get(function () {
  return '/talks/' + this._id;
});


module.exports = mongoose.model('Talk', Talk);