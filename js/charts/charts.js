"use strict"

function getDecimalTime(timeString) {
  let hours = parseInt(timeString);
  let minutes = parseInt( timeString.slice(-2) );
  let decimalMinutes = ( minutes * 100 ) / 60;
  
  return parseFloat(hours + '.' + decimalMinutes);
}