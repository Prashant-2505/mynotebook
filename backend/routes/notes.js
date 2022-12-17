const express = require('express')
const router = express.Router()
var fetchuser = require('../middleware/fetchuser')
const Note = require('../models/Note')
const { body, validationResult } = require('express-validator');



// Route 1 
// get all notes using GET: "api/notes/fetchallnotes"      login required

router.get('/fetchallnotes', fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id })
    res.send(notes)
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Internal server error occures")

  }
})



// Route 2
// add new notes using post: "api/notes/adnotes"      login required

router.post('/addnotes', fetchuser, [
  body('title', 'enter the valid title').isLength({ min: 3 }),
  body('description', 'Descrition must be 10 characters').isLength({ min: 10 }),], async (req, res) => {

    try {
      const { title, description, tag } = req.body

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Note({
        title, description, tag, user: req.user.id
      })
      const savedNote = await note.save()

      res.json(savedNote)
    }
    catch (error) {
      console.error(error.message)
      res.status(500).send("Internal server error occures")
    }
  })



// Route 3
// add updatenotes using putt: "api/notes//updatenotes/:id"      login required
// this will be a put req because we putting something in existing thing

router.put('/updatenotes/:id', fetchuser, async (req, res) => {
  // destructure the elemnt from body of botes
  const { title, description, tag } = req.body
  try {


    const newNote = {};
    // create a new note
    // intially its empty and take detail from user
    // if title is or other stuff given by user then set it to newNote
    if (title) { newNote.title = title }
    if (description) { newNote.description = description }
    if (tag) { newNote.tag = tag }

    // find the note is present or not whose we want to update
    let note = await Note.findById(req.params.id) // it will take Notte id from parameter that user insert
    if (!note) {
      return res.status(404).send("not found")
    }

    // now verify the user is orginal of that not who want update it
    if (note.user.toString() !== req.user.id) {
      return res.status(404).send("unauthorize user")
    }

    //  after verification we update the notes by using findIdAndUpdste thie will take user id  and updates note with $set: and new:true(if any new contact will come it will create automatically)
    note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
    res.json({ note })
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Internal server error occures")
  }
})



// 
// Route 4
// delete existing notes using put: "api/notes/deletenotes"      login required

router.delete('/deletenotes/:id', fetchuser, async (req, res) => {

  try {


    // find the note is present or not whose we want to delete
    let note = await Note.findById(req.params.id) // it will take Notte id from parameter that user insert
    if (!note) {
      return res.status(404).send("not found")
    }

    // now verify the user is orginal or not of that note who want to delete it
    // note.user.toString() give id onuser who want to update
    if (note.user.toString() !== req.user.id) {
      return res.status(404).send("unauthorize user")
    }

    //  after verification we delete the notes by using findIdAndUpdste thie will take user id  and delete note 
    note = await Note.findByIdAndDelete(req.params.id)
    res.json({ "success": "note has been deleted", note: note })
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Internal server error occures")
  }
})
module.exports = router