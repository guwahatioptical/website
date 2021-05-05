import {useState} from 'react'
import Intro from './intro';
import MainComponent from './MainComponent'
import '../css/App.css';

function App() {
  const [splash, setSplash] = useState(true)
  const intro = () =>
    setTimeout(() => {
      setSplash(false)
    }, 3700)
  return (
    <div className="App">
      {splash ? <Intro onload={intro()} /> : null}
      <MainComponent  />
    </div>
  );
}

export default App;
