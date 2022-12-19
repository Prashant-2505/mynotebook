
import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import Notesitems from './Noteitems'
import Addnotes from './Addnotes'

function Notes() {

    const context = useContext(NoteContext)
    const {notes,addNotes} = context  

  return (
    <>
    <Addnotes/>
    <div className='row my-3'>
       <h1>Your Notes</h1>
                 {notes.map((note)=>
                 {
                     return <Notesitems key={note._id}  note={note}/>
                 })}
    </div>
    </>
  )
}

export default Notes
