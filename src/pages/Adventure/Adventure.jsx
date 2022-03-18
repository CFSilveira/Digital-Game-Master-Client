import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddForm from '../../components/AddForm/AddForm';
import availableAdv from '../../img/available.png'

function Adventure() {
    const [adventures, setAdventures] = useState([]);

    const fetchAdventures = async () => {
        try {
          const storedToken = localStorage.getItem('authToken');
    
          let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/adventure`, {
            headers: { Authorization: `Bearer ${storedToken}` },
          });
          setAdventures(response.data);
          console.log(response.data, 'adventures')
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchAdventures();
      }, []);

  return (
    <div>
      {adventures && (
        <div className='adv'>
          <div>
            <AddForm refreshAdventures={fetchAdventures} />
          </div>

          <div>
              <img className='splash-adv' src={availableAdv} alt='splash homepage'></img>
              <h1 className='auth'>Available Quests</h1>

              {adventures.map((adventure) => {
                return (
                  <div key={adventure._id}>
                    <Link style={{ textDecoration: 'none' }} to={`/adventure/${adventure._id}`}>
                      <h3 className='auth'>{adventure.name}</h3>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      )}

    </div>
  );
}

export default Adventure;