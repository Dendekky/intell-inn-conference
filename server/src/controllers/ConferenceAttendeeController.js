import Attendee from '../models/ConferenceAttendees';

const {
    check, body, validationResult,
  } = require('express-validator');

const addAttendee = [
  check('name').isLength({ min: 3 }).withMessage('Please input your full name. Name too short'),
  body('email').isEmail().withMessage('Type in an actual email').normalizeEmail(),
  check('category').isLength({ min: 3 }).withMessage('Please state which category you belong to'),

  (req, res) => {
    const errors = validationResult(req);
       if(!errors.isEmpty()) {
           res.send({ 
               errors: errors.array(),
               status: 406
        })
       } else {
    const { name, email, category } = req.body

    const attendee = new Attendee({
        name,
        email,
        category
    })
    attendee.save((err) =>{
        if (err) {
            return res.send({
                status: 500,
                message: 'Internal server error'
            }) 
        }
        res.send({
            status: 201,
            name: attendee.name
        })
    })
}
}
] 

const getAllAttendees = (req, res) => {
    Attendee.find({}, (err, attendees) => {
        if(err) {
            res.send({
                status: 500,
                message: 'Internal server error'
            })
        }
        res.send({
            status: 200,
            attendees: attendees
        });
    });

}

const deleteAttendee = (req, res) => {
    Attendee.findByIdAndRemove(req.params.id)
    .then(res.redirect('/api/attendees'))
        res.redirect('/api/attendees')
}

module.exports = {
    addAttendee,
    getAllAttendees,
    deleteAttendee
}