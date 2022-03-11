import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

function Adventure() {

  return (
    <div>
        <Link to="/newadventure">Create New Adventure</Link>    
        <h1>Digital Game Master</h1>
        <Link to="/editadventure">Edit Adventure</Link>


    </div>
  );
}

export default Adventure;