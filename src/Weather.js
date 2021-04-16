import React, {useState} from "react";
import axios from "axios";
import DetailsWeather from "./DetailsWeather";
import WeatherForecast from "./WeatherForecast";

export default function Weather (props) {
  const [weather, setWeather] = useState({loaded : false});
  const [city, setCity] = useState (props.defaultCity);
  function showWeather(response) {
    setWeather({
      date: new Date (response.data.dt * 1000),
      loaded: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon
    });

  }
  function search (){
 let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e8cf93c11b2e03971616c05c042f7ad8&units=metric`;
    axios.get(url).then(showWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();   
   search();
  }
  function updateCity(event) {
    event.preventDefault();
   setCity(event.target.value); 
  }
  let form = (
    <form className="formi"
       onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for a City..."
        onChange={updateCity}
      />
      <button className="button" type="submit">Search </button>
    </form>
  );
  if (weather.loaded) {
    return (
      <div>
        {form}
          <DetailsWeather info={weather} />
          <WeatherForecast />
        </div>
      
    );
  } else {
    search();
    return  "Loading... "
    
  }
}
