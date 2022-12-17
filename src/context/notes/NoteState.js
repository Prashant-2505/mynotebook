
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const s1 = {
        "name": "david Mishra",
        "age": "56"
    }
    const [state, setstate] = useState(s1)
    const update = () => {
        setTimeout(() => {
            setstate({ "name": "monti mehta" })
        }, 2000);
    }

    return (
        
            <NoteContext.Provider value={{ state, update }}>
                {props.children}
            </NoteContext.Provider>
        
    )

}


export default NoteState