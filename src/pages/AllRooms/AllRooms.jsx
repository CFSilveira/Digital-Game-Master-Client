import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import AddRoom from '../../components/AddRoom/AddRoom';

function AllRooms() {
    const [rooms, setRooms] = useState([]);
    

    const fetchRooms = async () => {
        try {
          const storedToken = localStorage.getItem('authToken');
    
          let response = await axios.get(`${process.env.REACT_APP_API_URL}/room`, {
            headers: { Authorization: `Bearer ${storedToken}` },
          });
          setRooms(response.data);
          console.log(response.data, 'adventures')
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchRooms();
      }, []);

  return (
    <div>
      {rooms && (
        <>
        <AddRoom refreshRooms={fetchRooms} />
          <h1>Available Rooms</h1>

          {rooms.map((room) => {
            return (
              <div key={room._id}>
                <Link to={`/room/${room._id}`}>
                  <h3>{room.name}</h3>
                </Link>
              </div>
            );
          })}
        </>
      )}

    </div>
  );
}

export default AllRooms;