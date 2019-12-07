import express from 'express';
const TalkController = require('../controllers/index').TalkController
const AttendeeController = require('../controllers/index').AttendeeController
const AssignedTalksController = require('../controllers/index').AssignedTalksController

const app = express.Router();

app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Mylaw conference API. Enjoy your consumation and RESTing',
  }));

app.post('/api/attendee/add', AttendeeController.addAttendee);
app.post('/api/talk/add', TalkController.addTalk);
app.post('/api/talk/assign', AssignedTalksController.assignTalk);
app.post('/api/talk/delete/:id', TalkController.deleteTalk);
app.post('/api/attendee/delete/:id', AttendeeController.deleteAttendee);
app.post('/api/assignedtalk/delete/:id', AssignedTalksController.deleteAssignedTalk);
app.get('/api/talks', TalkController.getAllTalks);
app.get('/api/attendees', AttendeeController.getAllAttendees);
app.get('/api/assigned/talks', AssignedTalksController.getAllAssignedTalks);
app.get('/api/talk/get/:id', TalkController.getTalk);

module.exports = app