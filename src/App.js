import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import CityInput from './component/CityInput';
import CityWeather from './component/CityWeather';
function App(){
  const [city,setCity]=React.useState("");
  const [report,setReport]=React.useState("");
  const fetchCityWeather=(city)=>{
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`
      ).then((responce)=>responce.json())
      .then((result)=>{
        console.log(JSON.stringify(result["main"]));
        setReport(JSON.stringify(result["main"]));
      }).catch(()=>{
        setReport("result not found");
      })
  }
  return(
    <div className="App">
      <CityInput city={city} setCity={setCity} fetchCityWeather={fetchCityWeather}/>
      <CityWeather city={city} weatherReport={report} />
    </div>
  );
}
export default App;
