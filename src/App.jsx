import bulbOn from './assets/bulb-on.png'
import bulbOff from './assets/bulb-off.png'
import { useState } from 'react';

import './App.css'

function App() {
  const [on, setOn] = useState(true)

const lightSwitch = () => {
  setOn(prevState => !prevState);
}

  return (
    <div className={on ? '' : 'dark'}>
      <h1>{on ? 'This room is LIT' : 'The room is dark'}</h1>
      <img src={on ? bulbOn : bulbOff} alt="light bulb" />
      <div className={`switch ${on ? '' : 'dark'}`} onClick={lightSwitch}>
        <div className={`switch-button ${on ? '' : 'dark'}`}>
        </div>
      </div>
    </div>
  )
}

export default App
