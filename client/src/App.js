import React,{useState, useEffect}from "react"

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

import ProtectedRoutes from "./Components/ProtectedRoutes";
function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<ProtectedRoutes/>}>
                  <Route path="/home" element={<Home />} />

                </Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
