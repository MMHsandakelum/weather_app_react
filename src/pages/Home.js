import '../App.css';
import Search from '../components/search/search';
import CurrentWeather from '../components/current-weather/current-weather';
import { Weather_Api, Api_Key } from '../api';
import { useState } from 'react';
import WeatherForecast from '../components/forecast/forecast';



function Home() {

    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);


    const handleOnSearchChange = (searchData) => {
        const [lati, longi] = searchData.value.split(" ");
        const currentWeatherFetch = fetch(`${Weather_Api}/weather?lat=${lati}&lon=${longi}&appid=${Api_Key}&units=metric`);
        const forecastFetch = fetch(`${Weather_Api}/forecast?lat=${lati}&lon=${longi}&appid=${Api_Key}&units=metric`);

        Promise.all([currentWeatherFetch, forecastFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();
                const forecastResponse = await response[1].json();

                setCurrentWeather({ city: searchData.label, ...weatherResponse });
                setForecast({ city: searchData.label, ...forecastResponse });
            })
            .catch((err) => console.log(err));
    }

    console.log(forecast);

    return (
        <div className="container">
            <Search onSearchChange={handleOnSearchChange} />
            <div className='middle'>
                {currentWeather && <CurrentWeather data={currentWeather} />}
                {forecast && <WeatherForecast data={forecast} />}
            </div>

        </div>


    );
}

export default Home;
