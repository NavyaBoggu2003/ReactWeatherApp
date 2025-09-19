import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./Searchbox.css";
function Searchbox({updateInfo}){
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="1031e82180981b48e6b9fba105594774";
     
    let getWeatherInfo=async() => {
    let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse=await response.json();
    console.log(jsonResponse);
    let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feelsLike,
        weather:jsonResponse.weather[0].description,
    }
    console.log(result);
    return result;
    };
    let[city,setCity]=useState("");
    let handleChange=(evt)=>{
        setCity(evt.target.value);
            };
    let handleSubmit=async (evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo= await getWeatherInfo();
        updateInfo(newInfo);

    }; 
    return(
        <div className="searchbox">
            <h1>Search for Weather</h1>
            <form onSubmit={handleSubmit}>
            <TextField
              id="city" label="City Name"  variant="outlined" required value={city} onChange={handleChange} />
              <br/><br/>
         <Button  variant="contained" type="submit">Search</Button>
            </form>
        </div>
    )
}
export default Searchbox;