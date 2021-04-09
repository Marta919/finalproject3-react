import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
export default function DetailsWeather (props) {
    return (
        <div className="Details">   
          <FormattedDate date={props.info.date}/>
          <h2> {props.info.city} </h2>
 <div className="row">
        <div className="col-4 weatherTemperature">
          <div className="float-left">
          <WeatherIcon code= {props.data.icon} alt={props.data.description} />
          
         <span className="temp"> {Math.round(props.info.temperature)}°C  </span>        
           </div>
           </div>
        <div className="col-6 main">
        <ul className="list">
          <li className="Description"> Description: {props.info.description}</li>
          <li className="Humidity">Humidity: {Math.round(props.info.humidity)} %</li>
          <li className="Windspeed">Wind Speed: {Math.round(props.info.wind)} km/h</li>
        </ul>
        
        </div>
        </div>
       </div>
        
    );

}