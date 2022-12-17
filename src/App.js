
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";





function App() {
  return (
    <>
     {/* NoteState is our contex api we wrap everything inside it to use its state  */}
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route >
            <Route exact path="/About" element={<About />}></Route >
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;



