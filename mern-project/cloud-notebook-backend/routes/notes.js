const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Notes = require('../models/Notes')
const User = require('../models/user');

const postNotesValidations = [
    body('userId', 'note ').exists(),
    body('title', 'note must have a title').exists(),
    body('description', 'note must have a description').exists()
]

router.post('/', postNotesValidations, async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const user = await User.findById(req.body.userId);

    if (!user) return res.status(404).json({ error: "user does not exist" });

    Notes.create({
        user: req.body.userId,
        title: req.body.title,
        description: req.body.description,
        tag: req.body.tag,
    }).then(note => res.json(note));

})

module.exports = router;