import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function GameAdventure(props) {
  const [name, setName] = useState(props.area.name);
  const [description, setDescription] = useState(props.area.description);
  const [image, setImage] = useState(props.area.image);
  const [step, setStep] = useState(props.area.step);
  const [connections, setConnections] = useState(props.area.connections);
  const [events, setEvents] = useState(props.area.events);
  const currentArea = useState(props.currentArea)
/*   const [areas, setAreas] = useState(props.area);
 */
  const { adventureId } = useParams();

  console.log(props.area.name)
  console.log('Connections :', connections)
  console.log('Current step :', step)


    const changeArea = () => {
      console.log('Area changed to', step)

  }



  return (
    <div>
    <p>{name}</p>
    <p>Step: {step}</p>
    <button value={step} onChange={(e) => setName(e.target.value)} onClick={changeArea}>Move here</button>


    
{/*     {props.allAreas.map((area) => (
              (!props.area.connections.includes(area._id)) && <option value={area._id}>{area.name}</option>
              
            ))}  */}

    
    </div>
  )
}

export default GameAdventure