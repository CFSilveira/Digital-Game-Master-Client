import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function GameDetails(props) {
  const [name, setName] = useState(props.area.name);
  const [description, setDescription] = useState(props.area.description);
  const [image, setImage] = useState(props.area.image);
  const [step, setStep] = useState(props.area.step);
  const [connections, setConnections] = useState(props.area.connections);
  const [events, setEvents] = useState(props.area.events);
  const currentArea = useState(props.currentArea)
  const [areas, setAreas] = useState(null);

  const currentAreaStep = '1A'

  const { adventureId } = useParams();


  const changeArea = () => {
    console.log('Area changed to...', step)
    currentArea = currentArea + 1
    console.log(currentArea)
}

  return (
    <div className='Area-card'>

      {areas &&
      <>
      <h1>You are currently in: {areas[currentArea].name}</h1>

   
      <p><img src={areas[currentArea].image} alt='visual representation of adventure'></img></p>
      <p>Area description: {areas[currentArea].description}</p>


      </>
      }
    </div>
  );
}

export default GameDetails;