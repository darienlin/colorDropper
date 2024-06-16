import './App.css'
import { useState } from 'react';

function App() {
const [cursorActive, setCursorActive] = useState(false)

const toggleCursor = () => {
  setCursorActive(!cursorActive)
}


  return (
    <div className={cursorActive ? 'app cursor': 'app'}>
      <div>Color Dropper</div>
      <button onClick={toggleCursor}>Click here to Color Drop</button>
    </div>
  );
}

export default App;
