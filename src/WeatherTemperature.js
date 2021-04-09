import React, {useState} from "react";
export default function WeatherTemperature (props){
    const [unit, setUnit] = useState ("celsius");
    function convertToFarenheit (event){
    event.preventDefault();
    setUnit("farenheit");
    }
    function convertToCelsius (event){
    event.preventDefault();
    setUnit("celsius");
    }
    if (unit === "celsius"){
    return (
      <div className="temperature">
        <span className="temp"> 
        {Math.round(props.celsius)} </span>
        <span className="unit">°C | {""}<a href="" onClick={convertToFarenheit}>°F</a>  </span>  
            </div>
        );
    }else {
        return (
      <div className="temperature">
        <span className="temp"> 
        {Math.round((props.celsius * 9/5)+32)} </span>
        <span className="unit"><a href="" onClick={convertToCelsius}>°C </a> {""} | °F  </span>  
            </div>
        );

    }
}