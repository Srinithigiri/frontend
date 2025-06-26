import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Package from './Pages/Package';
import Login from './Pages/Login';
import Signup from './Pages/Signup'; // Changed from Signin to Signup

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package" element={<Package />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Changed path to /signup */}
      </Routes>
    </Router>
  );
}

export default App;