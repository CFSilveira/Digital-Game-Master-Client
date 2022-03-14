import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddForm from '../../components/AddForm/AddForm';

function Adventure() {
    const [adventures, setAdventures] = useState([]);

    const fetchAdventures = async () => {
        try {
          const storedToken = localStorage.getItem('authToken');
    
          let response = await axios.get(`${process.env.REACT_APP_API_URL}/adventure`, {
            headers: { Authorization: `Bearer ${storedToken}` },
          });
          setAdventures(response.data);
          console.log(response.data, 'adventures')
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchAdventures();
      }, []);

  return (
    <div>
      {adventures && (
        <>
        <AddForm refreshAdventures={fetchAdventures} />
          <h1>Available Quests</h1>

          {adventures.map((adventure) => {
            return (
              <div key={adventure._id}>
                <Link to={`/adventure/${adventure._id}`}>
                  <h3>{adventure.name}</h3>
                </Link>
              </div>
            );
          })}
        </>
      )}

    </div>
  );
}

export default Adventure;