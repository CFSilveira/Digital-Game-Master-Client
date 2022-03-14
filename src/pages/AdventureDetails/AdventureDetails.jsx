import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function AdventureDetails() {
  const [adventure, setAdventure] = useState(null);
  const { adventureId } = useParams();

  const fetchAdventure = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/adventure/${adventureId}`);
      setAdventure(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdventure();
  }, []);

  return (
    <div>
      {adventure && (
        <>
          <h1>Name: {adventure.name}</h1>
          <p><img src={adventure.image} alt='visual representation of adventure'></img></p>
          <p>Description: {adventure.description}</p>
          <p>Number of areas included: {adventure.areas.length}</p>
          <p>Areas: {adventure.areas}</p>
          <p>Encounter included: {adventure.encounters}</p>
        </>
      )}
{/*       {adventure &&
        adventure.tasks.map((task) => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <h4>Description</h4>
            <p>{task.description}</p>
          </li>
        ))}
 */}
      {adventure && <Link to={`/adventure/edit/${adventure._id}`}>Edit adventure</Link>}
      <Link to="/adventure"> Back to Adventure List</Link>
    </div>
  );
}

export default AdventureDetails;