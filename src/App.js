import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [apodData, setApodData] = useState(null); // State for storing APOD data
  const [loading, setLoading] = useState(false); // State for loading state
  const [error, setError] = useState(null); // State for storing error message

  // Fetch Astronomy Picture of the Day (APOD)
  useEffect(() => {
    async function fetchApod() {
      setLoading(true);
      setError(null); // Reset the error message before a new fetch

      try {
        // Use the Heroku backend API URL here
        const response = await axios.get('https://nasa-backend-ananya-8a0f587afdfc.herokuapp.com/api/apod');
        setApodData(response.data); // Save fetched data to state
      } catch (error) {
        setError('Unable to load image. Please try again later.'); // Display error if the fetch fails
        console.error('Error fetching APOD data:', error);
      } finally {
        setLoading(false); // Set loading to false after the fetch attempt
      }
    }

    fetchApod(); // Call the function to fetch APOD data when the component mounts
  }, []); // Empty dependency array ensures this runs only once when the component mounts

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
            <img src={apodData.url} alt={apodData.title} style={{ width: '100%', height: 'auto' }} />
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
