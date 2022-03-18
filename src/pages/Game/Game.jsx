import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import SearchAPI from '../../components/SearchAPI/SearchAPI';

function Game() {
  const [adventure, setAdventure] = useState(null);
  const { adventureId } = useParams();
  const [areas, setAreas] = useState([]);
/*   const [step, setStep] = useState('');
 */  const [currentArea, setCurrentArea] = useState(null);
  const [showAPI, setShowAPI] = useState(false);
  const searchResults = null;

  const fetchAdventure = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/adventure/${adventureId}`);
      setAdventure(response.data);
      setAreas(response.data.areas);
      setCurrentArea(response.data.areas[0])
      console.log('Areas found:', response.data.areas)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdventure();
  }, []);

  const changeArea = (area) => {
   /*  console.log('Area changed to...', step) */
    const newArea = areas.find((element) => element.step === area.step)
    setCurrentArea(newArea)
    console.log(currentArea)
}

const toggleShow = () => {
  setShowAPI(!showAPI);
  console.log(showAPI);
};



  return (
    <div className='Area-card'>

      {showAPI &&
        
        <div>
       <SearchAPI></SearchAPI>

        </div>
        }



      {currentArea &&
      <>
      <button className='formButton' onClick={toggleShow}>{showAPI ? 'Hide API search menu' : 'Show API search menu'}</button>
      <h1 className='green-tinted-2'>You are in: {currentArea.name}</h1>

      <div className='Area-Big-Box'>
      <>  
      <p><img className='Game-Img' src={currentArea.image} alt='visual representation of adventure'></img></p>
      </>
      <div className='Area-Inner-Box'>
        <div>
          <h3 className='green-tinted-2'>Area description</h3>
        </div>
        <div>
          <p>{currentArea.description}</p>
          {currentArea.events.map((area) => (
            <p>area.events</p>
          ))}
          <p>{currentArea.events}</p>
        </div>
      </div>
      </div>
      
      <h3 className='green-tinted-2'>This area connects to</h3>
      <div className='Area-card-game'>
      
      {currentArea.connections &&
        currentArea.connections.map((area) => (
          <div>
          {/* <GameAdventure allAreas={areas} area={area} refreshAreas={fetchAdventure}/> */}
          <h2 className='green-tinted'>{area.name}</h2>
          <button className='formButton' onClick={()=> changeArea(area)}>Move to {area.name}</button>
{/*           <button value={area.step} onChange={(e) => setStep(e.target.value)} onClick={()=> changeArea(area)}>Move to {area.name}</button>
 */}
        </div>
        ))}
         
        </div>
  
      </>
      }
      <Link style={{ textDecoration: 'none' }} to="/adventure"><h5 className='auth'>Return to Quests</h5></Link>


    </div>
  );
}

export default Game;