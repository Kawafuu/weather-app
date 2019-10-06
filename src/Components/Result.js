import React from 'react'
const Result = props =>{
    return(
        <div>
        <p>Weather for: {props.location}</p>
        <p>{props.weatherDefinition}</p>
        <p>current temp is: {props.temp}</p>
        <p>{props.pressure} ha pressure</p>
        <i>{props.icon}</i>
        </div>
    );
}

export default Result;
