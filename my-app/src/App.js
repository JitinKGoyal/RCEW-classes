
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import ForState from './components/ForState';

function App() {

  let data1 = {
    title: "first-title",
    imgSrc: "https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000",
    desc: "desc1"
  }

  let data2 = {
    title: "s-title",
    imgSrc: "https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000",
    desc: "desc2"
  }


  return (
    <>
      <Navbar />
      <div className='d-flex'>

        {/* here 'data' are prop */}
        <Card data={data1} />
        <Card data={data2} />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>

      <ForState />

    </>
  );
}

export default App;
