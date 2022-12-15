const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');


// create a user using: POST "/api/auth"
router.post('/createuser', [
    body('email', 'enter the valid mail').isEmail(),
    body('name', 'enter the valid name').isLength({ min: 3 }),
    body('password').isLength({ min: 4 })
], async(req, res) => {

    // if there are error return bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // check weather the user with this
    let user = await User.create
    ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    .then(user => res.json(user));
   
})

module.exports = router