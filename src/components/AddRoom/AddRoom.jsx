import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddRoom(props) {
  const [name, setName] = useState('');
  //const [gameMaster, setGameMaster] = useState('');
  const [players, setPlayers] = useState('');
  const [adventure, setAdventure] = useState('');
  const { gameMaster } = useParams();


  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { name, gameMaster, players, adventure };

    axios
      .post(`${process.env.REACT_APP_API_URL}/room`, body)
      .then((response) => {
        setName('');
        setPlayers('');
        setAdventure('');
        props.refreshRooms();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Create Room</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="adventure">Adventure</label>
        {props.allAdventures.map((adventure) => (
            <div>
            <input
          type="radio"
          name="adventure"
          value={adventure._id}
          onChange={(e) => setAdventure(e.target.value)}
            />
            <label htmlFor={adventure._id}>{adventure.name}</label>
            </div>
        ))}

        
        <button type="submit">Create room</button>
      </form>
    </div>
  );
}

export default AddRoom;
