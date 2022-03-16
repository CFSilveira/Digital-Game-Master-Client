import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import GameAdventure from '../../components/GameAdventure/GameAdventure';

function Game() {
  const [adventure, setAdventure] = useState(null);
  const { adventureId } = useParams();
  const [areas, setAreas] = useState(null);
  const currentArea = 0
  const currentAreaStep = '1A'

  const fetchAdventure = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/adventure/${adventureId}`);
      setAdventure(response.data);
      setAreas(response.data.areas);
      console.log('Areas found:', response.data.areas)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdventure();
  }, []);

/*   const fetchAreas = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/area/${response.data.areas._id}`);
      setArea(response.data);
      console.log('ssssssssssssssssssss', response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAreas();
  }, []); */

  return (
    <div className='Area-card'>

      {areas &&
      <>
      <h1>You are currently in: {areas[currentArea].name}</h1>

   
      <p><img src={areas[currentArea].image} alt='visual representation of adventure'></img></p>
      <p>Area description: {areas[currentArea].description}</p>

      <p>This area connects to</p>
      <div className='Area-card-game'>
      {(adventure && areas) &&
        adventure.areas.map((area) => (
          <GameAdventure allAreas={areas} area={area} refreshAreas={fetchAdventure}/>
        ))} 
        </div>
  
      </>
      }

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

export default Game;