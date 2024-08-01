import './App.css'
import { useState } from 'react'

function App() {

  const [ color, setColor ] = useState("");

  const onclick = async () => {
    const [ tab ] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id as number },
      args: [ color ],
      func: (color) => {
        document.body.style.backgroundColor = color;
        document.body.style.color = color;

      }
    })
  }


  return (
    <>
      <input type="color" onChange={(e) => setColor(e.target.value)} />
      <h1>Color changer</h1>
      <div className="card">
        <button onClick={onclick}>
          click
        </button>
      </div>
    </>
  )
}

export default App
