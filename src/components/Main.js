import {useState} from 'react'
import Intro from './intro';
import MainPage from './MainPage'
import '../css/Main.css';

function Main() {
  const [splash, setSplash] = useState(true)
  const intro = () =>
    setTimeout(() => {
      setSplash(false)
    }, 3700)
  return (
    <div className="App">
      {splash ? <Intro onload={ intro() } />:<MainPage />}
    </div>
  );
}

export default Main;
