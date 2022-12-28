import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>

    </>
  );
}

export default App;
