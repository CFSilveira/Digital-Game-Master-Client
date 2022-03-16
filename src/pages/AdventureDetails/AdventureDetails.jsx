import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function AdventureDetails() {
  const [adventure, setAdventure] = useState(null);
  const { adventureId } = useParams();

  const fetchAdventure = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/adventure/${adventureId}`);
      setAdventure(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdventure();
  }, []);

  return (
    <div className='Area-card'>
      {adventure && (
        <>
          <h1>Name: {adventure.name}</h1>
          <p><img className='Adventure-Frame' src={adventure.image} alt='visual representation of adventure'></img></p>
          <p>Description: {adventure.description}</p>

          { adventure.areas && (
            <>

            <p>Number of areas included: {adventure.areas.length}</p>
          {/* <p>Areas included: {adventure.areas}</p> */}
          </>


          )}

          {/* <p>Encounter included: {adventure.encounters}</p> */}
        </>
      )}

      {adventure &&
      <>
      <Link className='fake-button' to={`/adventure/edit/${adventure._id}`}>Edit adventure</Link>
      <Link className='fake-button' to={`/adventure/game/${adventure._id}`}>Start adventure</Link>
      </>
      }
      <Link className='fake-button' to="/adventure"> Back to Adventure List</Link>
    </div>
  );
}

export default AdventureDetails;