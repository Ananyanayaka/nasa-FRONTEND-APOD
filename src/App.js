import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [apodData, setApodData] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 


  useEffect(() => {
    async function fetchApod() {
      setLoading(true);
      setError(null); 

      try {
        // Use the Heroku backend API URL here
        const response = await axios.get('https://nasa-backend-ananya-8a0f587afdfc.herokuapp.com/api/apod');
        setApodData(response.data); 
      } catch (error) {
        setError('Unable to load image. Please try again later.'); 
        console.error('Error fetching APOD data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchApod(); 
  }, []); 

  return (
    <div className="App">
      <h1>NASA Space Data</h1>

      {/* APOD (Astronomy Picture of the Day) */}
      <div>
        <h2>Astronomy Picture of the Day</h2>

        {/* Loading State */}
        {loading && <p>Loading...</p>}

        {/* Error Message */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {/* Data Rendering */}
        {apodData && !loading && !error && (
          <>
            <h3>{apodData.title}</h3>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <img src={apodData.url} alt={apodData.title} style={{ width: '80%', height: 'auto' }} />
            </div>
            <p>{apodData.explanation}</p>
          </>
        )}

        {/* No Data Available */}
        {!apodData && !loading && !error && <p>No data available.</p>}
      </div>
    </div>
  );
}

export default App;
