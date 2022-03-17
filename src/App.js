import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import Navbar from './components/Navbar/Navbar';
import IsAnon from './components/IsAnon/IsAnon';
import IsPrivate from './components/IsPrivate/IsPrivate';
import Adventure from './pages/Adventure/Adventure';
import AdventureDetails from './pages/AdventureDetails/AdventureDetails';
import EditAdventure from './pages/EditAdventure/EditAdventure';
import AllRooms from './pages/AllRooms/AllRooms';
import RoomDetails from './pages/RoomDetails/RoomDetails';
import Game from './pages/Game/Game';
import SearchAPI from './components/SearchAPI/SearchAPI';

function App() {
  return (
    <div className="App">
    <Navbar />

    <Routes>
    <Route path="/" element={<HomePage />} />

    <Route
          path="/adventure"
          element={
            <IsPrivate>
              <Adventure />
            </IsPrivate>
          }
        />
    
    <Route
          path="/adventure/:adventureId"
          element={
            <IsPrivate>
              <AdventureDetails />
            </IsPrivate>
          }
        />
      
    <Route
        path="/adventure/edit/:adventureId"
        element={
          <IsPrivate>
            <EditAdventure />
          </IsPrivate>
        }
      />

    <Route
        path="/adventure/game/:adventureId"
        element={
          <IsPrivate>
            <Game />
          </IsPrivate>
        }
      />

    <Route
          path="/room"
          element={
            <IsPrivate>
              <AllRooms />
            </IsPrivate>
          }
        />
    
    <Route
          path="/room/:roomId"
          element={
            <IsPrivate>
              <RoomDetails />
            </IsPrivate>
          }
        />

    <Route
          path="/room/game/:roomId"
          element={
            <IsPrivate>
              <Game />
            </IsPrivate>
          }
        />

    <Route
          path="/searchAPI"
          element={
            <IsPrivate>
              <SearchAPI />
            </IsPrivate>
          }
        />

    <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
    <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />

    </Routes>

    </div>
  );
}

export default App;
