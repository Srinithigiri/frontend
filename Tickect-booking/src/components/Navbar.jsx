import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        background: 'linear-gradient(90deg, #1E40AF, #14B8A6)',
        color: '#FFFFFF',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        position: 'relative',
      }}
    >
      <h2
        style={{
          fontSize: '1.5rem',
          fontWeight: '800',
          marginRight: '2rem',
          animation: 'pulse 2s infinite',
        }}
      >
        🌍 TravelGo
      </h2>
      <div style={{ display: 'flex', gap: '1.5rem', marginRight: '2rem' }}>
        <Link
          to="/"
          style={{
            fontSize: '1.2rem',
            color: '#FFFFFF',
            textDecoration: 'none',
            transition: 'transform 0.2s, color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.color = '#FBBF24';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.color = '#FFFFFF';
          }}
        >
          Home
        </Link>
        <Link
          to="/package"
          style={{
            fontSize: '1.2rem',
            color: '#FFFFFF',
            textDecoration: 'none',
            transition: 'transform 0.2s, color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.color = '#FBBF24';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.color = '#FFFFFF';
          }}
        >
          Packages
        </Link>
      </div>
      <div style={{ borderLeft: '1px solid #FFFFFF', paddingLeft: '2rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link
            to="/booking"
            style={{
              fontSize: '1.2rem',
              color: '#FFFFFF',
              textDecoration: 'none',
              transition: 'transform 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.color = '#FBBF24';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.color = '#FFFFFF';
            }}
        >
          Booking
        </Link>
        <Link
          to="/login"
          style={{
            fontSize: '1.2rem',
            color: '#FFFFFF',
            textDecoration: 'none',
            transition: 'transform 0.2s, color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.color = '#FBBF24';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.color = '#FFFFFF';
          }}
        >
          Login
        </Link>
        <Link
          to="/signup"
          style={{
            fontSize: '1.2rem',
            color: '#FFFFFF',
            textDecoration: 'none',
            transition: 'transform 0.2s, color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.color = '#FBBF24';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.color = '#FFFFFF';
          }}
        >
          Sign Up
        </Link>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;