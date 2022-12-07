import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextM from './components/TextM';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs';



function App() {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path='/' element={<TextM />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>

    </>
  );
}

export default App;
