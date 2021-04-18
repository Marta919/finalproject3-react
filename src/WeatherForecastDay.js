import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastDay (props) {
    function maxTemperature () {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }
    function minTemperature () {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }
    function day (){
let date = new Date(props.data.dt * 1000);
let day = date.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturday"
];
return days[day]; 
    }
    
    return (
        <div>
        <div className="day"> {day()}</div> 
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
            <div className="tempForecast">
             <span className="max"> {maxTemperature()}</span>  <span className="min">/ {minTemperature()}</span> 
            </div>
            </div>
           
    );
}