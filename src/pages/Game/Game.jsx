import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import GameAdventure from '../../components/GameAdventure/GameAdventure';

function Game() {
    const [adventure, setAdventure] = useState(null);
    const { adventureId } = useParams();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [steps, setSteps] = useState('');
    const [areas, setAreas] = useState('');
    const [encounters, setEncounters] = useState('');
  
  const fetchAreas = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/area`);
      setAreas(response.data);
      console.log('areas', response.data)
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAdventure = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/adventure/${adventureId}`);
      let { name, description, image, steps } = response.data;
      setName(name);
      setDescription(description);
      setImage(image);
      setSteps(steps);
      setAdventure(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdventure();
    fetchAreas();
  }, []);



  return (
    <div>
    {(adventure && areas) && 
        <>

        <div>
          <h1>Name: {adventure.name}</h1>
        </div>

        <div>
        <GameAdventure />
          <p><img src={adventure.image} alt='visual representation of adventure'></img></p>
        </div>

        <div>  
          <p>Description: {adventure.description}</p>
          <p>Number of areas included: {adventure.areas.length}</p>
          <p>Areas included: {adventure.areas}</p>
          <p>Encounter included: {adventure.encounters}</p>
        </div>

        </>


        }
    </div>
  )
}

export default Game