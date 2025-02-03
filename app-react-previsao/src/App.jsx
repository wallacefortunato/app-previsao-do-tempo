import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef(null)

  function searchCity() {
    console.log(inputRef.current.value)
    const city = inputRef.current.value;
    const key = "0af654511cfb8f33bf22168dc032e7a8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }

  return (
    <div>
      <h1>Previsão do tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
      <button onClick={searchCity}>Buscar</button>
    </div>
  )
}

export default App
