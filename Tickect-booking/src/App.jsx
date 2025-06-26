import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Package from './pages/Package';
import Login from './pages/Login';
import Signup from './pages/Signup'; // Changed from Signin to Signup

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