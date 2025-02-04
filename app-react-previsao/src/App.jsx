import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from './components/WeatherInformations/WeatherInformations'

function App() {
  const [weather, setWeather] = useState({})
  const inputRef = useRef(null)

  async function searchCity() {
    console.log(inputRef.current.value)
    const city = inputRef.current.value;
    const key = "0af654511cfb8f33bf22168dc032e7a8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`;
    const apiInfo = await axios.get(url);

    setWeather(apiInfo.data);


  }

  return (
    <div>
      <h1>Previsão do tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
      <button onClick={searchCity}>Buscar</button>

      <WeatherInformations weather={weather} />
    </div>
  )
}

export default App
