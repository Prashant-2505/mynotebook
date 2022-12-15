const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');


// create a user using: POST "/api/auth"
router.post('/', [
    body('email', 'enter the valid mail').isEmail(),
    body('name', 'enter the valid name').isLength({ min: 3 }),
    body('password').isLength({ min: 4 })
], (req, res) => {
 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(user => res.json(user));

})

module.exports = router