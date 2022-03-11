import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import Navbar from './components/Navbar/Navbar';
import IsAnon from './components/IsAnon/IsAnon';
import IsPrivate from './components/IsPrivate/IsPrivate';


function App() {
  return (
    <div className="App">
    <Navbar />

    <Routes>
    <Route path="/" element={<HomePage />} />

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
