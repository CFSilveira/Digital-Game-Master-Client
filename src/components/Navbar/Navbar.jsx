import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import ReactPlayer from 'react-player/youtube'
import bm from '../../img/bm.png'



function Navbar() {
  const { loggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    <nav className={'Navbar '}>

      {loggedIn && (
        <div className='bottomBar'>
        <div className='player'>
          <ReactPlayer
            width='400px'
            height='80px'
            controls='true'
            url='https://www.youtube.com/watch?v=xHP2GgxYddY&list=PLSkW9yhFguFRP0FZbD3W1_aY1gzYS9KBl'
          />
        </div>
        <div>
        <img className='bm-img' src={bm} alt='splash homepage'></img>
        </div>
        <div className='logout'>
            <button className='myButton' onClick={logoutUser}>Logout</button>
          </div>    

        </div>
      )}
      
    </nav>
  );
}

export default Navbar;
