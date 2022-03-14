import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import AddArea from '../../components/AddArea/AddArea';

function EditAdventure() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [adventure, setAdventure] = useState(null);


  const { adventureId } = useParams();

  const navigate = useNavigate();

  const deleteAdventure = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/adventure/${adventureId}`)
      .then(() => navigate('/adventure'));
  };

  const fetchAdventure = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/adventure/${adventureId}`);
      let { name, description, image } = response.data;
      setName(name);
      setDescription(description);
      setImage(image);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdventure();
  }, []);

  const { areaId } = useParams();

  const fetchAreas = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/Area/${areaId}`);
      let { name, description, image, step, connections, events, adventure } = response.data;
      setName(name);
      setDescription(description);
      setImage(image);
/*       setStep('step');
      setConnections('connections');
      setEvents('events');
      setAdventure('adventure');
      props.refreshAreas(); */
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAreas();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { name, description, image };

    axios
      .put(`${process.env.REACT_APP_API_URL}/adventure/${adventureId}`, body)
      .then((response) => {
        setName('');
        setDescription('');
        navigate(`/adventure/edit/${adventureId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Edit Quest</h3>
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
        <button type="submit">Edit Quest</button>
      </form>
      <button onClick={deleteAdventure}> Delete Quest</button>

      <AddArea refreshAreas={fetchAreas} />

      {adventure &&
        adventure.areas.map((area) => (
          <li key={area._id}>
            <h3>{area.name}</h3>
            <h4>Description</h4>
            <p>{area.description}</p>
          </li>
        ))}
    </div>
  );
}

export default EditAdventure;
