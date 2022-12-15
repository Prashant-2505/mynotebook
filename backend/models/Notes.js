const mongoose = require('mongoose')
const { Schema } = mongoose;
const NotesSchema = new Schema({
  title :{
    type : String,
    required:true
   },
description:
{
    type:string,
    required:true,
},
tag :
{
    type:string,
    default: 'genral'
},
date:
{
    type:Date,
    default: Date.now
}
  });

  // we have to exports that scehma to use where Notes is the model name we give and then scemaname
  module.exports = mongoose.model('Notes',NotesSchema)