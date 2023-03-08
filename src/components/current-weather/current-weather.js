import "./current-weather.css";

const CurrentWeather = ({ data }) => {

    return (

        <div className="weathercard">
            <div className="cardtop">
                <p className="city">{data.city}</p>
                <p className="weathertype">{data.weather[0].description}</p>
                <img className="weather-icon" src={`icons/${data.weather[0].icon}.png`} alt="weather icon" />
            </div>
            <div className="cardbottom">
                <p className="Temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="card-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="card-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="card-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="card-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="card-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CurrentWeather;