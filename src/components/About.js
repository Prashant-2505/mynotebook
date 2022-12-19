import React from 'react'
import { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'

function About() {

  // we use useEffect hook here to give some effect we send a update function as an effect in it and that update function is in Notecontex 
  // who is just changing the name of state after 2 sec

  return (
    <div>
      this is about
    </div>
  )
}

export default About
