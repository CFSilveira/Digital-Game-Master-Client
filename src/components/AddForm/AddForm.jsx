import React, { useState } from 'react';
import axios from 'axios';
import createAdv from '../../img/create.png'

function AddForm(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { name, description, image };

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/adventure`, body)
      .then((response) => {
        setName('');
        setDescription('');
        props.refreshAdventures();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1 className='auth'>Create Quest</h1>
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
        
        <button className='formButton' type="submit">Create Adventure</button>
      </form>
      <img className='splash-adv' src={createAdv} alt='splash homepage'></img>
    </div>
  );
}

export default AddForm;
