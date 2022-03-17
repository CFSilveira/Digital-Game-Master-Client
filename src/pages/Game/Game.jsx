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
  const [showAPI, setShowAPI] = useState(true);
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
        
        <div>
        <h1>THE Search Box will appear here</h1>
        <SearchAPI></SearchAPI>

        </div>
        
        {searchResults &&
        <div>
        <h2>Are there results?</h2>
        </div>
        }
        
        </div>
        }



      {currentArea &&
      <>
      <button onClick={toggleShow}>{showAPI ? 'Hide' : 'Show'}</button>
      <h1>You are currently in: {currentArea.name}</h1>

      <div className='Area-Big-Box'>
      <>  
      <p><img className='Game-Img' src={currentArea.image} alt='visual representation of adventure'></img></p>
      </>
      <div className='Area-Inner-Box'>
        <div>
          <h3>Area description</h3>
        </div>
        <div>
          <p>{currentArea.description}</p>
        </div>
      </div>
      </div>

      <div className='Area-card-game'>
      <p>This area connects to</p>
      {currentArea.connections &&
        currentArea.connections.map((area) => (
          <div>
          {/* <GameAdventure allAreas={areas} area={area} refreshAreas={fetchAdventure}/> */}
          <p>{area.name}</p>
          <button onClick={()=> changeArea(area)}>Move to {area.name}</button>
{/*           <button value={area.step} onChange={(e) => setStep(e.target.value)} onClick={()=> changeArea(area)}>Move to {area.name}</button>
 */}
        </div>
        ))}
         
        </div>
  
      </>
      }

    </div>
  );
}

export default Game;