import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div style={{ padding: '2rem', color: '#fff', backgroundColor: '#1A1A1A', textAlign: 'center' }}>
      <h1>Sign Up</h1>
      <p>Create your travel account.</p>
      <input type="text" placeholder="Username" style={{ padding: '0.5rem', margin: '0.5rem' }} />
      <input type="email" placeholder="Email" style={{ padding: '0.5rem', margin: '0.5rem' }} />
      <input type="password" placeholder="Password" style={{ padding: '0.5rem', margin: '0.5rem' }} />
      <button style={{ padding: '0.5rem 1rem', margin: '0.5rem' }}>Sign Up</button>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default Signup;