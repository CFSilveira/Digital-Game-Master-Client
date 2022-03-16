import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {ThemeContext} from '../../context/theme.context';
import { AuthContext } from '../../context/auth.context';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { loggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    <nav className={'Navbar ' + theme}>
      <Link className='fake-button' to="/"> Homepage</Link>
      {loggedIn && (
        <>
          <Link className='fake-button' to="/adventure"> Create/Edit Adventure</Link>
          <Link className='fake-button' to="/room"> Create/Edit Search Room</Link>
          {user.username}
          <button onClick={logoutUser}>Logout</button>
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
