import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function AddArea(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [step, setStep] = useState('');
  const [connections, setConnections] = useState('');
  const [events, setEvents] = useState('');
  const { adventureId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { name, description, image, step, connections, events, adventureId };

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/area`, body)
      .then((response) => {
        setName('');
        setDescription('');
        setImage('');
        setStep('');
        setConnections('');
        setEvents('');
        props.refreshAreas();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
      <h3>Create Area</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="image">Image Url</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        
        <label htmlFor="step">Step</label>
        <input
          type="text"
          name="step"
          value={step}
          onChange={(e) => setStep(e.target.value)}
        />

        <label htmlFor="connections">Connections</label>
        <input
          type="array"
          name="connections"
          value={connections}
          onChange={(e) => setConnections(e.target.value)}
        />

        <label htmlFor="events">Events</label>
        <input
          type="array"
          name="events"
          value={events}
          onChange={(e) => setEvents(e.target.value)}
        />
    
        <button type="submit">Create Area</button>
      </form>
      </div>
      
    </div>
  );
}

export default AddArea;
