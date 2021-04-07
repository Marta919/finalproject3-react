import React from "react";
export default function FormattedDate(props){

let time = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = props.date.getDay();

function date(time) {
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
 
  return `${day}, ${hours}:${minutes}`;
 
}


}