import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import AddArea from '../../components/AddArea/AddArea';
import EditArea from '../../components/EditArea/EditArea';

function EditAdventure() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [steps, setSteps] = useState('');
  const [areas, setAreas] = useState('');
  const [encounters, setEncounters] = useState('');
  const [adventure, setAdventure] = useState(null);


  const { adventureId } = useParams();

  const navigate = useNavigate();

  const deleteAdventure = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/adventure/${adventureId}`)
      .then(() => navigate('/adventure'));
  };
  

/*    const fetchAreas = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/area`);
      setAreas(response.data);
      console.log('areas', response.data)
    } catch (error) {
      console.log(error);
    }
  }; */

  const fetchAdventure = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/adventure/${adventureId}`);
      let { name, description, image, steps } = response.data;
      setName(name);
      setDescription(description);
      setImage(image);
      setSteps(steps);
      setAdventure(response.data);
      setAreas(response.data.areas)
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdventure();
    //fetchAreas();
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { name, description, image, areas, encounters };

    axios
      .put(`${process.env.REACT_APP_API_URL}/api/adventure/edit/${adventureId}`, body)
      .then((response) => {
        navigate(`/adventure/edit/${adventureId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Link style={{ textDecoration: 'none' }} to="/adventure"><h3 className='auth'>Return to Quests</h3></Link>
      <h1 className='auth'>Edit Quest</h1>
      <form className='form' onSubmit={handleSubmit}>
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

{/*           <p>Number of areas included: {adventure.areas.length}</p>
          <p>Areas included: {adventure.areas}</p>    */} 
         <button className='formButton' type="submit">Edit Quest</button>
      </form>
      <br></br>
      <button className='formButton' onClick={deleteAdventure}> Delete Quest</button>

      <AddArea refreshAreas={fetchAdventure}/>

       {(adventure && areas) &&
        adventure.areas.map((area) => (
          <EditArea allAreas={areas} area={area} refreshAreas={fetchAdventure}/>
        ))}
{/*         <Link style={{ textDecoration: 'none' }} to="/adventure"><h1 className='auth'>Return to Quests</h1></Link>
 */}        </div>
  );
}

export default EditAdventure;