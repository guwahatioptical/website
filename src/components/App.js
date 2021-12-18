import {useState} from 'react'
import Intro from './intro';
import MainComponent from '../images/MainComponent'
import '../css/App.css';

// importing bootstrap files
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"

function App() {
  const [splash, setSplash] = useState(true)
  const intro = () =>
    setTimeout(() => {
      setSplash(false)
    }, 3700)
  return (
    <div className="App col-12">
      {splash ? <Intro onload={intro()} /> : null}
      <MainComponent  />
    </div>
  );
}

export default App;
