import './index.css'
import React from 'react';

const CityWeather=(props)=>{
    return(
        <div className=" container bg-secondary p-5"style={{}} >
            <div className="display-4 text-white pb-3">{props.city}</div>
            <div className="text-white breakline" ><h4>{props.weatherReport}</h4></div>
        </div>
        
    )
}
export default CityWeather;