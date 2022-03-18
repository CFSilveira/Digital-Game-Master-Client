import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditArea(props) {
  const [name, setName] = useState(props.area.name);
  const [description, setDescription] = useState(props.area.description);
  const [image, setImage] = useState(props.area.image);
  const [step, setStep] = useState(props.area.step);
  const [connections, setConnections] = useState(props.area.connections);
  const [events, setEvents] = useState(props.area.events);
  const { adventureId } = useParams();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(connections)
    const body = { name, description, image, step, connections, events, adventureId };
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/area/${props.area._id}`, body)
      .then((response) => {
        props.refreshAreas();
      })
      .catch((err) => console.log(err));
  };

  const addConnections = (valueCon) => {
    if (connections.includes(valueCon)) {
      return

    } else {
      setConnections([...connections, valueCon])
    }




  };

  return (
    <div className='Area-cards'>
    <div className='Area-card-form'>
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
          <select name="connections" id="connections" defaultValue="Goofy" onChange={(e) => addConnections(e.target.value)}>
            {props.allAreas
            .filter((element) => {return element.step !== props.area.step})
            .map((area) => (
              <>
              {(area.name && !(area.connections.some(connection => connection.name === area.name))) && <option value={area._id}>{area.name}</option>}
             </>
            ))} 
          </select>

    
        <button className='formButton' type="submit">Create Area</button>
      </form>



      </div>

      <div className='Area-card-img'>
        <p><img className='Area-Img' src={image} alt='map of area'></img></p>
      </div>
    </div>
  );
}

export default EditArea;
