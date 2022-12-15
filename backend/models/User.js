const mongoose = require('mongoose')
const { Schema } = mongoose;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true
    },
    password:
    {
        type: String,
        required: true
    },
    date:
    {
        type: Date,
        default: Date.now
    }
});
 
// we have to exports that scehma to use where user is the model name we give and then scemaname
const User = mongoose.model('user',UserSchema)
module.exports = User