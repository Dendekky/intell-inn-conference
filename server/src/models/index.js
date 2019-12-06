const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb+srv://handyman:11235813@cluster0-o2rzx.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
