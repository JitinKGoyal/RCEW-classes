const express = require('express');
const User = require('../models/user');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const signUpValidations = [
    body('name', "Name must be minimum of 2 chars").isLength({ min: 2 }),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Paswword must be minimum of 5 chars").isLength({ min: 5 })]

// For Sign Up
router.get('/', signUpValidations, async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const user = await User.findOne({ email: req.body.email }); // 2sec

    if (user) {
        return res.json({ error: "user already exists" });
    }

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then(user => res.json(user));

    // const user = User(req.body);
    // user.save();
});


module.exports = router;