import './App.css'
import { useState } from 'react';

function App() {
const [cursorActive, setCursorActive] = useState(false)

const toggleCursor = () => {
  setCursorActive(!cursorActive)
}

const clickMe = async () =>{
  let [tab] = await chrome.tabs.query({active: true});

  chrome.scripting.insertCSS({
    target: {tabId: tab.id!},
    files: ['App.css']
  })

  chrome.scripting.executeScript({
    target: {tabId: tab.id!},
    func: () => {
      document.body.classList.add("cursor");
      //console logs it so we can use it
      console.log(chrome.runtime.getURL('dropper16.png'))
    }
  })
}


  return (
    <div className={cursorActive ? 'app cursor': 'app'}>
      <div>Color Dropper</div>
      <button onClick={clickMe}>Click here to alert</button>
      <button onClick={toggleCursor}>Click here to Color Drop</button>
    </div>
  );
}

export default App;
