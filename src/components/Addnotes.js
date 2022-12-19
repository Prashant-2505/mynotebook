
import React, { useContext ,useState } from 'react'
import NoteContext from '../context/notes/NoteContext'

const Addnotes = () => {

    const context = useContext(NoteContext)
    const {addNote} = context  

    const [note, setnote] = useState({title: "", description:"", tag:""})
 
     const handleclick = (e)=>
     {
        e.preventDefault()
        addNote(note.title,note.description,note.tag);
     }

     const onchange = (e)=>
     {
         setnote({...note,[e.target.name]:e.target.value})
     } 
    

    return (
        <div>
            <div className="container my-3">
                <h1>Add a Notes</h1>
                <form className='my-3'>
                    <div className="form-group">
                        <label html For="title">Title</label>
                        <input type="text" className="form-control" id="title" name = "title" aria-describedby="emailHelp" placeholder="Enter title" onChange={onchange} />
                     </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control" id="description" name="description" placeholder="Description" onChange={onchange} />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleclick}>ADD note</button>
                </form>
              
            </div>
        </div>
    )
}

export default Addnotes
