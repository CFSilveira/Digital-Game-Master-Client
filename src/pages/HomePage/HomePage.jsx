import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import homeOne from '../../img/home1.png'
import { AuthContext } from '../../context/auth.context';


function HomePage() {
    const { loggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    <div>
      <h1>Digital Game Master</h1>
      <img src={homeOne} alt='splash homepage'></img>

      {loggedIn && (
        <>
          <h1>{user.username} is logged in</h1>
          <Link to="/adventure"> Create/Edit Adventure</Link>
          <br></br>
          <Link to="/room"> Create/Edit Search Room</Link>
          <br></br>
          <button onClick={logoutUser}>Logout</button>
        </>
      )}

      {!loggedIn && (
        <>
          <h1>No user logged in</h1>
          <Link to="/signup"> Signup</Link>
          <Link to="/login"> Login</Link>
        </>
      )}
      <br></br>
      <img src='../../img/home1.png' alt='splash homepage'></img>
    </div>
  );
}

export default HomePage;