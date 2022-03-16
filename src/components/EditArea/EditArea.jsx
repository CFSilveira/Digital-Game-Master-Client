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
/*       let tempCon = [...connections];
      tempCon.filter(( el) => el !== valueCon)
      setConnections(tempCon) */
    } else {
      setConnections([...connections, valueCon])
    }



    /* axios
      .put(`${process.env.REACT_APP_API_URL}/area/${props.area._id}`, body)
      .then((response) => {
        props.refreshAreas();
      })
      .catch((err) => console.log(err)); */
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
            {props.allAreas.map((area) => (
              (!props.area.connections.includes(area._id)) && <option value={area._id}>{area.name}</option>
              
            ))} 
          </select>


          

{/*          <label htmlFor="connections">Connections</label>
        {props.allAreas.map((area) => (
            <div>
            <input
          type="radio"
          name="connections"
          value={area._id}
          onChange={(e) => setConnections(e.target.value)}
            />
            <label htmlFor={area._id}>{area.name}</label>
            </div>
        ))} */}

{/*         <label htmlFor="connections">Connections</label>
        {props.allAreas.map((area) => (
            <div>
            <select name="connections" id={area._id} multiple>
                <option value={area._id}>{area.name}</option>
              </select>
            <input
              onChange={(e) => setConnections(e.target.value)}
            />
            <label htmlFor={area._id}>{area.name}</label>
            </div>
        ))} */}



{/*         {props.allAreas.map((area) => (
            <div>
            <select name="connections" id={area._id} multiple>
                <option value={area._id}>{area.name}</option>
              </select>
            <input
              onChange={(e) => setConnections(e.target.value)}
            />
            <label htmlFor={area._id}>{area.name}</label>
            </div>
        ))} */}


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

      <div className='Area-card-img'>
        <p><img src={image} alt='map of area'></img></p>
      </div>
    </div>
  );
}

export default EditArea;
