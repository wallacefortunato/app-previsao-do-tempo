/* eslint-disable react/prop-types */


function WeatherInformations({weather}) {
  
    console.log(weather)
    
    return (
    
    <div>
      <h2>{weather.name}</h2>
      <div>
      <img 
        src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} 
      />
      </div>
        <p>Temperatura: {Math.round(weather.main.temp)}</p>
    </div>
  );
}

export default WeatherInformations;