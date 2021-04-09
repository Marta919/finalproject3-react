import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function DetailsWeather (props) {
    return (
        <div className="Details">   
          <FormattedDate date={props.info.date}/>
          <h2> {props.info.city} </h2>
          <br />
 <div className="row mt-3">
        <div className="col-6 weatherTemperature">
         <div className="clearfix">
          <div className= "float-left">
           <WeatherIcon code= {props.info.icon} /> 
           
           <div className= "float-right">
       
           
         <WeatherTemperature celsius= {props.info.temperature}/> 
         </div>
           </div>
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