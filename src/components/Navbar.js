import React,{useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'

function Navbar() {
    // using location hook to make page active
    let location = useLocation();
    
useEffect(()=>
{
    console.log(location)
}, [location]);

    return (

        <nav className="navbar navbar-expand-lg bg-dark navbar-dark"> 
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MyNoteBook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"?"ative":" "}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/About"?"ative":" "}`} aria-current="page" to="/About">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar