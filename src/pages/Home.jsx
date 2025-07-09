
import React from 'react';

const Home = () => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      background: '#111',
      color: '#fff',
      minHeight: '100vh',
      padding: '2rem',
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '3rem',
      }}>
        <h1 style={{ fontSize: '2rem', color: '#22c55e' }}>OddsScope</h1>
        <nav>
          <a href="#" style={{ margin: '0 1rem', color: '#ccc' }}>Home</a>
          <a href="#" style={{ margin: '0 1rem', color: '#ccc' }}>Dashboard</a>
          <a href="#" style={{ margin: '0 1rem', color: '#ccc' }}>About</a>
        </nav>
      </header>

      <main style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Smarter Sports Betting</h2>
        <p style={{ fontSize: '1.2rem', color: '#aaa' }}>EV-driven. Transparent. Personalized. Built for serious bettors.</p>
        <div style={{ marginTop: '3rem' }}>
          <button style={{
            padding: '1rem 2rem',
            fontSize: '1rem',
            backgroundColor: '#22c55e',
            color: '#000',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            Launch Dashboard
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
