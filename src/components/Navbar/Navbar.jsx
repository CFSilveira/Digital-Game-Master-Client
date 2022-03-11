import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {ThemeContext} from '../../context/theme.context';
import { AuthContext } from '../../context/auth.context';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { loggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    <nav className={'Navbar ' + theme}>
      <Link to="/"> Homepage</Link>
      {loggedIn && (
        <>
          <Link to="/adventure"> Create/Edit Adventure</Link>
          <Link to="/room"> Create/Edit Search Room</Link>
          {user.username}
          <button onClick={logoutUser}>Logout</button>
        </>
      )}

      {!loggedIn && (
        <>
          <Link to="/signup"> Signup</Link>
          <Link to="/login"> Login</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
