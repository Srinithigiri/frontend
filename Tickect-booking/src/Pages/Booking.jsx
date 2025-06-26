import React, { useState } from 'react';

function Booking() {
  const [place, setPlace] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [members, setMembers] = useState('');

  const handleBooking = () => {
    alert(`Booking confirmed to ${place} on ${date} at ${time} for ${members} members`);
    // Add booking logic here
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
          maxWidth: '1260px',
          width: '100%',
          padding: '2rem',
        }}
      >
        <div
          style={{
            width: '1100px',
            padding: '4rem',
            backgroundColor: '#1A1A1A',
            borderRadius: '1.5rem',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
            position: 'relative',
            animation: 'fadeIn 1s ease-in-out',
          }}
        >
          <h2
            style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: '#FFFFFF',
              textAlign: 'center',
              marginBottom: '2.5rem',
              animation: 'pulse 2s infinite',
              position: 'relative',
            }}
          >
            Plan Your Adventure 🌍
          </h2>
          <input
            type="text"
            placeholder="Place (e.g., Maldives)"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            style={{
              width: '100%',
              padding: '2rem',
              marginBottom: '2rem',
              border: '2px solid #666666',
              borderRadius: '0.75rem',
              backgroundColor: '#333333',
              color: '#FFFFFF',
              fontSize: '1.4rem',
              transition: 'box-shadow 0.3s',
              position: 'relative',
              animation: 'fadeInUp 1s ease-in-out',
            }}
            onFocus={(e) => (e.target.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)')}
            onBlur={(e) => (e.target.style.boxShadow = 'none')}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{
              width: '100%',
              padding: '2rem',
              marginBottom: '2rem',
              border: '2px solid #666666',
              borderRadius: '0.75rem',
              backgroundColor: '#333333',
              color: '#FFFFFF',
              fontSize: '1.4rem',
              transition: 'box-shadow 0.3s',
              position: 'relative',
              animation: 'fadeInUp 1s ease-in-out 0.2s',
            }}
            onFocus={(e) => (e.target.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)')}
            onBlur={(e) => (e.target.style.boxShadow = 'none')}
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={{
              width: '100%',
              padding: '2rem',
              marginBottom: '2rem',
              border: '2px solid #666666',
              borderRadius: '0.75rem',
              backgroundColor: '#333333',
              color: '#FFFFFF',
              fontSize: '1.4rem',
              transition: 'box-shadow 0.3s',
              position: 'relative',
              animation: 'fadeInUp 1s ease-in-out 0.4s',
            }}
            onFocus={(e) => (e.target.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)')}
            onBlur={(e) => (e.target.style.boxShadow = 'none')}
          />
          <input
            type="number"
            placeholder="Number of Members"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
            style={{
              width: '100%',
              padding: '2rem',
              marginBottom: '2rem',
              border: '2px solid #666666',
              borderRadius: '0.75rem',
              backgroundColor: '#333333',
              color: '#FFFFFF',
              fontSize: '1.4rem',
              transition: 'box-shadow 0.3s',
              position: 'relative',
              animation: 'fadeInUp 1s ease-in-out 0.6s',
            }}
            onFocus={(e) => (e.target.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)')}
            onBlur={(e) => (e.target.style.boxShadow = 'none')}
          />
          <button
            onClick={handleBooking}
            style={{
              width: '100%',
              padding: '2rem',
              backgroundColor: '#FFFFFF',
              color: '#000000',
              fontWeight: 'bold',
              borderRadius: '0.75rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.4rem',
              transition: 'box-shadow 0.3s, transform 0.3s',
              position: 'relative',
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.5)';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = 'none';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Book Your Adventure
          </button>
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

export default Booking;