const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser')
const JWT_SECRET = 'secret@@'



// route 2
// create a user using: POST "/api/auth/createuser"
// using express validator to validate the elemnts
router.post('/createuser', [
    body('email', 'enter the valid mail').isEmail(),
    body('name', 'enter the valid name').isLength({ min: 3 }),
    body('password').isLength({ min: 4 })
], async (req, res) => {

    // if there are error return bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // check weather the user with this
    // findone is mongoose method ===> used to find the element prsnt or not

    try {

        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "sorry user with that email is already exist" })
        }

        // create is moongoose method 
        // here in User model where scehma is presnet create will create user and take details from body and send to User model/in Database
        // here we using bcryptjs to make password secure
        const salt = await bcrypt.genSalt(10);      // both return promise thts why we make it await ==> means it will wait till that promise resolve or get value
        const secPass = await bcrypt.hash(req.body.password, salt);

        // new user is created
        user = await User.create
            ({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
            })
        const data = {
            user:
            {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)

        // we have to send response otherwise our server is not working properly
        res.json({ authToken });   // here we send the the response as json usin arrow function inside .then  to the console
        // sending user to console
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error occures")
    }
})




// Route 2
// autheticate  a user using: POST "/api/auth/login      np login required"

router.post('/login', [
    body('email', 'enter the valid mail').isEmail(),
    body('password', 'password cannot be blank').exists(),

], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body

    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" })
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials" })
        }
        const data = {
            user:
            {
                id: user.id
            }
        } 
        const authToken = jwt.sign(data, JWT_SECRET)
        res.json({ authToken });
    }
        catch (error) {
            console.error(error.message)
            res.status(500).send("Internal server error occures")
        }

    })





    // Route 3
    // get login user details using post  "api/auth/get user"      login required
    // we can use fetchuser middleware in this function 

    router.post('/getuser',fetchuser, async (req, res) => {

try {
     userID = req.user.id
     const user = await User.findById(userID).select("-password")   // findById is mongoos method who find the details on basis of given id and selesct is monggose method to get the details all from data base if you use (- info) it will give all details expect then that info
    res.send(user)
} catch (error) {
    
    console.error(error.message)
    res.status(500).send("Internal server error occures")
}
})
module.exports = router






// Learn JWT tokken method