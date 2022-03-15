import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function GameAdventure(props) {
  const [name, setName] = useState(props.area.name);
  const [description, setDescription] = useState(props.area.description);
  const [image, setImage] = useState(props.area.image);
  const [step, setStep] = useState(props.area.step);
  const [connections, setConnections] = useState(props.area.connections);
  const [events, setEvents] = useState(props.area.events);
  const { adventureId } = useParams();




  return (
    <div>GameAdventure</div>
  )
}

export default GameAdventure