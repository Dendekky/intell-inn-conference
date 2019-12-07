import Talk from '../models/ConferenceTalks';

const {
    check, body, validationResult,
  } = require('express-validator');

const addTalk =[
  check('talk_title').isLength({ min: 3 }).withMessage('Please input a title. Title is too short'),
  body('talk_time').isLength({ min: 2 }).withMessage('Please input talk time'),
  check('talk_synopsis').isLength({ min: 10 }).withMessage('Please input a synopsis. Summary is too short'),

  (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.send({ 
            errors: errors.array(),
            status: 406
        })
    } else {
        
    const { talk_title, talk_time, talk_synopsis } = req.body;

    const talk = new Talk({
        talk_title,
        talk_time,
        talk_synopsis
    })
    talk.save((err) =>{
        if (err) {
            return res.send({
                status: 500,
                message: 'Internal server error'
        })}
        res.send({
            status: 201,
            success: true,
            title: talk.talk_title
        })
    } )
}
}
] 

const getAllTalks = (req, res) => {
    Talk.find({}, (err, talks) => {
        if(err) {
            res.send({
                status: 500,
                message: 'Internal server error'
            })
        }
        res.send({
            status: 200,
            talks: talks
        });
    });

}

const getTalk = (req, res) => {
    Talk.findById(req.params.id)
    .then(data => res.send({ talk: data }))
}

const deleteTalk = (req, res) => {
    Talk.findByIdAndRemove(req.params.id)
    .then(res.redirect('/api/talks'))
        res.redirect('/api/talks')
}

module.exports = {
    addTalk,
    getAllTalks,
    deleteTalk,
    getTalk
}