import React from 'react';
import {Form,Button} from 'react-bootstrap';
const CityInput=({city,setCity,fetchCityWeather})=>{
    const [error,setError]=React.useState("");
    const handleInputChange=(event)=>{
        setCity(event.target.value);
    }
    const handleSubmit=()=>{
        if(city==""){
           setError("please fill the input");
           setTimeout(()=>{
            setError("");
           },2000)
        }else{
            fetchCityWeather(city);
        }
    }
    return(
        <div className="container bg-info p-5">
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label className=""> City Name</Form.Label>
            <Form.Control 
            value={city}
            type="text" 
            placeholder="Enter city name"
            onChange={handleInputChange}

            />
            <p className="text-danger">{error}</p>
        </Form.Group>

        
        <Button variant="primary" onClick={handleSubmit}>
            Submit
        </Button>
        </Form>
        </div>
    );
}
export default CityInput;