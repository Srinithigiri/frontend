import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });
    axios.post('{}/api')
    alert(`Login successful! 😊👍`);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          width: '1000%',
          padding: '2rem',
        }}
      >
        <div
          style={{
            width: '900px',
            padding: '3rem',
            backgroundColor: '#1A1A1A',
            borderRadius: '1rem',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
            position: 'relative',
            animation: 'fadeIn 1.5s ease-in',
          }}
        >
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#FFFFFF',
              textAlign: 'center',
              marginBottom: '1.5rem',
              animation: 'pulse 2s infinite',
            }}
          >
            Login to Your Adventure 🌍
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: '#CCCCCC',
              marginBottom: '2rem',
              fontSize: '1rem',
              fontStyle: 'italic',
              animation: 'fadeIn 1.5s ease-in 0.5s',
            }}
          >
            "The journey of a thousand miles begins with a single step."
          </p>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              style={{
                border: '2px solid #666666',
                backgroundColor: '#333333',
                color: '#FFFFFF',
                padding: '1rem',
                borderRadius: '0.5rem',
                transition: 'box-shadow 0.3s, transform 0.3s',
                animation: 'fadeInUp 1s ease-in',
              }}
              onFocus={(e) => {
                e.target.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
                e.target.style.transform = 'translateY(-5px)';
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
              }}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              style={{
                border: '2px solid #666666',
                backgroundColor: '#333333',
                color: '#FFFFFF',
                padding: '1rem',
                borderRadius: '0.5rem',
                transition: 'box-shadow 0.3s, transform 0.3s',
                animation: 'fadeInUp 1s ease-in 0.2s',
              }}
              onFocus={(e) => {
                e.target.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
                e.target.style.transform = 'translateY(-5px)';
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '1.2rem',
                borderRadius: '0.5rem',
                color: '#000000',
                fontWeight: 'bold',
                border: '2px solid #666666',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                width: '100%',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.3)';
              }}
            >
              Embark Now
            </button>
          </form>
          <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#CCCCCC', fontSize: '1rem' }}>
            New here? <Link to="/signup" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 'bold' }}>Sign Up</Link>
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}

export default Login;