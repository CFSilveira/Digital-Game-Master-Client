import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import adventure from '../../img/adventure.png'
import register from '../../img/login.png'
import login from '../../img/register.png'
import { AuthContext } from '../../context/auth.context';


function HomePage() {
    const { loggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    <div>
      <h1 className='auth'>Digital Game Master</h1>

      {loggedIn && (
        <>
          <div className='homepage'>
            <div>
              <Link to="/adventure"><img className='splash-img' src={adventure} alt='splash homepage'></img></Link>
              <Link style={{ textDecoration: 'none' }} to="/adventure"><h1 className='auth'>Start or Create Quest</h1></Link>
                    
            </div>
          </div>      
        </>
      )}

      {!loggedIn && (
        <>
          <div className='homepage'>
            <div>              
              <Link to="/signup"><h1><img className='splash-img' src={register} alt='splash homepage'></img></h1></Link>
              <Link style={{ textDecoration: 'none' }} to="/signup"><h1 className='auth'>Signup</h1></Link>

              
            </div>
            <div>
              <Link to="/login"><h1><img className='splash-img' src={login} alt='splash homepage'></img></h1></Link>
              <Link style={{ textDecoration: 'none' }} to="/login"><h1 className='auth'>Login</h1></Link>

            </div>
          </div>


        </>
      )}
    </div>
  );
}

export default HomePage;