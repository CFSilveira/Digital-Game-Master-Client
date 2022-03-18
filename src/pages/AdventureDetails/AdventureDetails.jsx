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
          <h1 className='auth'>Name: {adventure.name}</h1>
          <h3><img className='Adventure-Frame' src={adventure.image} alt='visual representation of adventure'></img></h3>
          <h3>Description: {adventure.description}</h3>

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
      <div className='adv-details'>
      <Link style={{ textDecoration: 'none' }} to={`/adventure/edit/${adventure._id}`}><h1 className='auth'>Edit Quest</h1></Link>
      <Link style={{ textDecoration: 'none' }} to={`/adventure/game/${adventure._id}`}><h1 className='auth'>Start Quest</h1></Link>
      </div>
      }
      <Link style={{ textDecoration: 'none' }} to="/adventure"><h2 className='auth'>Back to Quest List</h2></Link>
    </div>
  );
}

export default AdventureDetails;