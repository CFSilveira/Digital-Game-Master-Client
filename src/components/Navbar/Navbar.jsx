import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {ThemeContext} from '../../context/theme.context';
import { AuthContext } from '../../context/auth.context';
import ReactPlayer from 'react-player/youtube'



function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { loggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    <nav className={'Navbar ' + theme}>
      <Link className='fake-button' to="/"> Homepage</Link>
      {loggedIn && (
        <>
          <Link className='fake-button' to="/adventure"> Create/Edit Adventure</Link>
          Logged in as {user.username}
          <button onClick={logoutUser}>Logout</button>

          <ReactPlayer
            width='300px'
            height='50px'
            controls='true'
            url='https://youtube.com/playlist?list=PLAQYw860yL3ZL6V17-8sZuq2d75o8ND16'
              
          />

        </>
      )}

      {!loggedIn && (
        <>
          <Link className='fake-button' to="/signup"> Signup</Link>
          <Link className='fake-button' to="/login"> Login</Link>
        </>
      )}
      
    </nav>
  );
}

export default Navbar;
