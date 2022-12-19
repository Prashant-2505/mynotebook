
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';

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
          <Alert  message = "your note is deleted !!"/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />}></Route >
              <Route exact path="/About" element={<About />}></Route >
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;



