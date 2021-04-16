import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState (false);
    let [forecast, setForecast] = useState (null);
    function handleResponse (response){
        setForecast(response.data.daily);
        setLoaded (true);
        
    }
    if (loaded){
        console.log(forecast);
        return (
<div className="WeatherForecast">
    <div className="row">
        <div className="col">
            <div className="day"> Wed</div>
            <WeatherIcon code="01d" size={36} />
            <div className="tempForecast">
             <span className="max">19°C</span>  <span className="min">10°C</span> 
            </div>
        </div>
        <div className="col">
            <div className="day"> Wed</div>
            <WeatherIcon code="01d" size={36} />
            <div className="tempForecast">
             <span className="max">19°C</span>  <span className="min">10°C</span> 
            </div>
        </div>
        <div className="col">
            <div className="day"> Wed</div>
            <WeatherIcon code="01d" size={36} />
            <div className="tempForecast">
             <span className="max">19°C</span>  <span className="min">10°C</span> 
            </div>
        </div>
        <div className="col">
            <div className="day"> Wed</div>
            <WeatherIcon code="01d" size={36} />
            <div className="tempForecast">
             <span className="max">19°C</span>  <span className="min">10°C</span> 
            </div>
        </div>
        <div className="col">
            <div className="day"> Wed</div>
            <WeatherIcon code="01d" size={36} />
            <div className="tempForecast">
             <span className="max">19°C</span>  <span className="min">10°C</span> 
            </div>
        </div>
    </div>
</div>
    );    
    } else {
    let apiKey = "e8cf93c11b2e03971616c05c042f7ad8";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl= `api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
    }
}
 