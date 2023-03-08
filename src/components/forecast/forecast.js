import { useState } from "react";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading } from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const WeatherForecast = ({ data }) => {
    const [showDiv1, setShowDiv1] = useState(true);
    const [isButtonHidden, setIsButtonHidden] = useState(false);
    const toggleDiv = () => {
        setShowDiv1(!showDiv1);
        setIsButtonHidden(true);
    }

    const dayInWeek = new Date().getDay();
    const forecastday = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek));

    console.log(forecastday);


    return (

        <div className="forecastSection">
            <label className="title">Daily Forecast</label>
            {showDiv1 ? (
                <div id="1st">
                    <Accordion allowZeroExpanded>
                        {data.list.splice(0, 3).map((item, idx) => (
                            <AccordionItem key={idx}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className="daily-weather">
                                            <img src={`icons/${item.weather[0].icon}.png`} alt="" className="icon-small" />
                                            <label className="day">{forecastday[idx]}</label>
                                            <label className="description">{item.weather[0].description}</label>
                                            <label className="temp">{Math.round(item.main.temp_max)}°C</label>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            ) : (
                <div id="2nd">
                    <Accordion allowZeroExpanded>
                        {data.list.splice(0, 7).map((item, idx) => (
                            <AccordionItem key={idx}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className="daily-weather">
                                            <img src={`icons/${item.weather[0].icon}.png`} alt="" className="icon-small" />
                                            <label className="day">{forecastday[idx]}</label>
                                            <label className="description">{item.weather[0].description}</label>
                                            <label className="temp">{Math.round(item.main.temp_max)}°C</label>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            )}
            {!isButtonHidden && <button className="btn" type="button" onClick={toggleDiv}>More</button>}
        </div>
    );

};

export default WeatherForecast;