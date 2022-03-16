import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function RoomDetails() {
  const [room, setRoom] = useState(null);
  const { roomId } = useParams();

  const fetchRoom = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/room/${roomId}`);
      setRoom(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRoom();
  }, []);

  return (
    <div>
      {room && (
        <>
          <h1>Name: {room.name}</h1>
          <p>Game Master: {room.gameMaster}</p>
          <p>Players: {room.players}</p>
          <p>Quest: {room.adventure}</p>
        </>
      )}

      {room && <Link to={`/room/game/${room._id}`}>Start Game</Link>}
      <Link to="/room"> Back to room List</Link>
    </div>
  );
}

export default RoomDetails;