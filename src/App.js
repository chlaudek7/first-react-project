import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './style.css';
import React from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";


function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/"  element={<Home/>}/>  
      </Routes>
      <Routes>
        <Route  path="/:searchVal"  element={<Home/>}/>  
      </Routes>
      <Routes>
        <Route  path="/book/:id/:searchVal"  element={<Detail/>}/>  
      </Routes>
    </Router>
  );
}

export default App;
