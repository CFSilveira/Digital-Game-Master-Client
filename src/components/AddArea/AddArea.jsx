import React, { useState } from 'react';
import axios from 'axios';

function AddArea(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [step, setStep] = useState('');
  const [connections, setConnections] = useState('');
  const [events, setEvents] = useState('');
  const [adventure, setAdventure] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { name, description, image, step, connections, events, adventure };

    axios
      .post(`${process.env.REACT_APP_API_URL}/area`, body)
      .then((response) => {
        setName('');
        setDescription('');
        setImage('');
        setStep('');
        setConnections('');
        setEvents('');
        setAdventure('');
        props.refreshAreas();
      })
      .catch((err) => console.log(err));
  };

  return (
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

        <label htmlFor="image">Image</label>
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

        <label htmlFor="adventure">Adventure</label>
        <input
          type="array"
          name="adventure"
          value={adventure}
          onChange={(e) => setAdventure(e.target.value)}
        />
        
        <button type="submit">Create Area</button>
      </form>
    </div>
  );
}

export default AddArea;
