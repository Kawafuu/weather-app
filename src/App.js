import React, {useState} from 'react';
import './App.css';
import Form from './Components/Form';
import Result from './Components/Result'


const App = () => {
  const [inputValue, setInputValue] = useState("")
  const[error, setError] = useState()
  const [weatherData, setWeatherData] = useState({
    date: '',
    temp: '',
    pressure: '',
    location: 'In the middle of nowhere, please type in your city',
    weatherDefinition: ''
  })
  const handleInputChange = e =>{
    setInputValue(e.target.value)
  }
  const handleCitySubmit = e =>{
    e.preventDefault()
    console.log("form submitted")
    const API = 'https://api.openweathermap.org/data/2.5/weather?q='+ inputValue +'&appid=c2254a1ace1ebfa4d5bb08211abed3eb&units=metric';
    fetch(API)
      .then(response => {
        if(response.ok){
          return response
        }
        throw Error("nie udało się")
      })
      .then(response => response.json())
      .then(data => {
        setError(false)
        setWeatherData({
          temp: data.main.temp,
          location: inputValue,
          pressure: data.main.pressure,
          weatherDefinition: data.weather[0].description
        })
        console.log(data)
      })
      .catch(err => {
        setError(true)
      })
  }



  return (
    <div className="App">
      <div className="app-wrapper">
      <div className="Form">
     <Form  
     onChange = {handleInputChange} 
     value={inputValue} 
     submit={handleCitySubmit}>
     </Form>
     </div>
     <Result
     location={weatherData.location}
     weatherDefinition={weatherData.weatherDefinition}
     pressure={weatherData.pressure}
     temp={weatherData.temp}
     />
     </div>
    </div>
  );
}

export default App;
