import {useState} from 'react'
import Intro from './intro';
import MainPage from './MainPage'
import '../css/Main.css';

function Main() {
  const [splash, setSplash] = useState(true)
  window.addEventListener('load',()=>{
    setTimeout(()=>{
      setSplash(false)
    },3700)
  })
  return (
    <div className="App">
      {splash?<Intro />:null}
      <MainPage />
    </div>
  );
}

export default Main;
