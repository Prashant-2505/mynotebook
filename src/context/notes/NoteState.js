// we can also send function too....
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
   
const notesInitial = 
    [
        {
          "_id": "63a01222b1c98c8837sdd96d0c",
          "user": "639c38f90e5005bd0f5ded2c",
          "title": "my-title",
          "description": "good coder",
          "tag": "new",
          "date": "2022-12-19T07:26:26.612Z",
          "__v": 0
        },
        {
          "_id": "63a01223b1c98c8837dfd96d0e",
          "user": "639c38f90e5005bd0f5ded2c",
          "title": "my-title",
          "description": "good coder",
          "tag": "new",
          "date": "2022-12-19T07:26:27.465Z",
          "__v": 0
        },
        {
          "_id": "63a01223b1c98c8837df96d0e",
          "user": "639c38f90e5005bd03f5ded2c",
          "title": "my-title",
          "description": "good coder",
          "tag": "new",
          "date": "2022-12-19T07:26:27.465Z",
          "__v": 0
        },
        {
          "_id": "63a01223b1c98c8837fgd96d0e",
          "user": "639c38f90e5005bd0f85ded2c",
          "title": "my-title",
          "description": "good coder",
          "tag": "new",
          "date": "2022-12-19T07:26:27.465Z",
          "__v": 0
        },
        {
          "_id": "63a01223b1c398c882137d96d09",
          "user": "639c38f90e5005bd0f5ded2c",
          "title": "my-title",
          "description": "good coder",
          "tag": "new",
          "date": "2022-12-19T07:26:27.465Z",
          "__v": 0
        },
        {
          "_id": "63a01223b11c98c88327d96d0e",
          "user": "639c38f90e5005bd0f5ded2c",
          "title": "my-title",
          "description": "good coder",
          "tag": "new",
          "date": "2022-12-19T07:26:27.465Z",
          "__v": 0
        },
      
      ]

const [notes,setnotes] = useState(notesInitial)

// add a note
const addNote = (title,description,tag)=>
{
  // todo call api

  console.log("adding new note")
   let note = { "_id": "63a01223b11c98c88327d96d0e",
   "user": "639c38f90e5005bd0f5ded2c",
   "title": title,
   "description": description,
   "tag": tag,
   "date": "2022-12-19T07:26:27.465Z",
   "__v": 0
}
setnotes (notes.concat(note))    // we using setnotes to insert ya set a note into notes array because our notes is in array form that why we using push 
}

// delete a note
const deleteNote = ()=>
{
  
}

// update a note
const updateNote = ()=>
{
  
}
    return (
            <NoteContext.Provider value={{notes,addNote, deleteNote,updateNote}}>
                {props.children}
            </NoteContext.Provider>
    )

}


export default NoteState