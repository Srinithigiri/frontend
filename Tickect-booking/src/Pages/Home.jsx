import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [destinations, setDestinations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/destinations');
        if (!response.ok) throw new Error('Failed to fetch destinations');
        const data = await response.json();
        setDestinations(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchDestinations();
  }, []);

  return (
    <div style={{ padding: '2rem', color: '#fff', backgroundColor: '#1A1A1A', textAlign: 'center' }}>
      <h1>Welcome to Travel Bucket List</h1>
      <p>Explore your dream destinations!</p>

      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : destinations.length > 0 ? (
        <div>
          <h2>Featured Destinations</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {destinations.map((dest) => (
              <li key={dest.id} style={{ margin: '1rem 0', fontSize: '1.1rem' }}>
                {dest.name} - Budget: ${dest.budget}, Travel Time: {dest.travelTime} days
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading destinations...</p>
      )}

      <div className="navigation-links" style={{ marginTop: '2rem' }}>
        <Link
          to="/package"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#FFFFFF',
            color: '#000000',
            fontSize: '1.2rem',
            fontWeight: '600',
            borderRadius: '0.75rem',
            textDecoration: 'none',
            margin: '0 1rem',
          }}
        >
          Explore Packages
        </Link>
        <Link
          to="/login"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#FFFFFF',
            color: '#000000',
            fontSize: '1.2rem',
            fontWeight: '600',
            borderRadius: '0.75rem',
            textDecoration: 'none',
            margin: '0 1rem',
          }}
        >
          Login
        </Link>
        <Link
          to="/signup"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#FFFFFF',
            color: '#000000',
            fontSize: '1.2rem',
            fontWeight: '600',
            borderRadius: '0.75rem',
            textDecoration: 'none',
            margin: '0 1rem',
          }}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Home;