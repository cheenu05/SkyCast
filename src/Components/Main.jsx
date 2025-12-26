import React from 'react'
import {
    WiDaySunny,
    WiNightClear,
    WiCloudy,
    WiRain,
    WiFog,
    WiSnow,
    WiThunderstorm
} from "react-icons/wi";
import { CiLocationOn } from "react-icons/ci";
import { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherImg from "../Assets/WeatherImg.jpeg";





const Main = () => {

    const API_KEY = "b77d74c5e091e383e8231b6c38141457";

    const [location, setLocation] = useState("Delhi");
    const [inputValue, setInputValue] = useState("");
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecastData, setForecastData] = useState([]);


    // 🌤️ icon mapping
    const weatherIconMap = {
        "01d": WiDaySunny,
        "01n": WiNightClear,
        "02d": WiCloudy,
        "02n": WiCloudy,
        "03d": WiCloudy,
        "03n": WiCloudy,
        "04d": WiCloudy,
        "04n": WiCloudy,
        "09d": WiRain,
        "09n": WiRain,
        "10d": WiRain,
        "10n": WiRain,
        "11d": WiThunderstorm,
        "11n": WiThunderstorm,
        "13d": WiSnow,
        "13n": WiSnow,
        "50d": WiFog,
        "50n": WiFog,
    };

    // 📅 date
    const today = new Date();
    const currentDay = today.toLocaleDateString("en-US", { weekday: "long" });
    const currentDate = today.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    const getDayName = (dateStr) =>
        new Date(dateStr).toLocaleDateString("en-US", { weekday: "short" });

    const formatTime = (unix) =>
        new Date(unix * 1000).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        });

    const handelSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") return alert("Enter city name");
        setLocation(inputValue.trim());
        setInputValue("");
    };

    // 🌐 API CALLS
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                // CURRENT WEATHER
                const currentRes = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
                );

                const { lat, lon } = currentRes.data.coord;

                setCurrentWeather({
                    temp: Math.round(currentRes.data.main.temp),
                    humidity: currentRes.data.main.humidity,
                    wind: Math.round(currentRes.data.wind.speed * 3.6),
                    icon: currentRes.data.weather[0].icon,
                    desc: currentRes.data.weather[0].main,
                    sunrise: currentRes.data.sys.sunrise,
                    sunset: currentRes.data.sys.sunset,
                });

                // FORECAST
                const forecastRes = await axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`
                );

                const forecast = forecastRes.data.list
                    .filter(item => item.dt_txt.includes("12:00:00"))
                    .slice(1, 5)
                    .map(item => ({
                        day: getDayName(item.dt_txt),
                        temp: Math.round(item.main.temp),
                        icon: item.weather[0].icon,
                    }));

                setForecastData(forecast);

                // AIR QUALITY
                const airRes = await axios.get(
                    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
                );




                setCurrentWeather(prev => ({
                    ...prev,
                    aqi: airRes.data.list[0].main.aqi,
                }));

            } catch (err) {
                alert("City not found 😵");
            }
        };

        fetchWeather();
    }, [location]);

    const CurrentIcon =
        currentWeather && weatherIconMap[currentWeather.icon];




    return (
        <>

            <p className=' font-bold sm:text-xl text-[12px] text-center'>The Data of Air Quality Start from 1 - 5 Range 1 :Good , 5 : Very Poor ☠️ </p>
            <hr className='text-white ' />
            <div className="main-container w-full h-screen  bg-gray-800  sm:flex  justify-center  p-4 sm:p-0 ">



                {/* Left Box Start */}

                <div className="LeftBox  bg-gray-900  sm:mt-20 p-8  sm:h-100 sm:w-100 sm:rounded-4xl  hover:border-r-2 border-gray-400 hover:scale-105 duration-300 hover:cursor-pointer hover:border-gray-400 hover:rounded-3xl flex sm:flex-col justify-between "
                    style={{
                        backgroundImage: `url(${WeatherImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}>

                    <div>
                        <h2 className='text-black mt-5 sm:mt-0 text-4xl font-serif'> {currentDay} </h2>
                        <h3 className='text-black font-sans'> {currentDate} </h3>
                        <h3 className='text-black font-serif capitalize'> {location} </h3>
                    </div>

                    {currentWeather && (
                        <div >
                            {CurrentIcon && <CurrentIcon size={70} className=" text-yellow-400" />}
                            <h1 className="text-white  text-2xl sm:px-3">{currentWeather.temp}°C</h1>
                            <p className="sm:text-gray-300 font-bold sm:px-3">{currentWeather.desc}</p>
                        </div>
                    )}


                </div>


                {/* right box start */}

                <div className="RightBox bg-gray-900 sm:mt-20 p-4 sm:h-100 sm:w-100 sm:rounded-4xl hover:scale-105 duration-300  hover:border-l-2 hover:border-gray-400 hover:rounded-3xl ">

                    {/* box1 start */}
                    {currentWeather && (
                        <div className='Box1 mt-2 hover:cursor-pointer'>

                            <div className='Box1-1 flex justify-between '>

                                < h2 className='text-white text-xl font-serif pl-3  mb-1 ' > Humidity </h2 >
                                < h3 className='text-white text-lg font-sans pr-3' > {currentWeather.humidity}% </h3 >

                            </div>

                            <div className='Box1-2 flex justify-between'>

                                < h2 className='text-white text-xl font-serif pl-3  mb-1 ' > Air Quality </h2 >
                                < h3 className='text-white text-lg font-sans pr-3' > {currentWeather.aqi} </h3 >

                            </div>

                            <div className='Box1-3 flex justify-between'>

                                < h2 className='text-white text-xl font-serif pl-3  mb-1 ' > Wind </h2 >
                                < h3 className='text-white text-lg font-sans pr-3' > {currentWeather.wind} km/h </h3 >

                            </div>
                            <div className='Box1-4 flex justify-between'>

                                < h2 className='text-white text-xl font-serif pl-3  mb-1 ' > Sun-Rise </h2 >
                                < h3 className='text-white text-lg font-sans pr-3' > {formatTime(currentWeather.sunrise)} </h3 >

                            </div>
                            <div className='Box1-5 flex justify-between'>

                                < h2 className='text-white text-xl font-serif pl-3  mb-1 ' > Sun-Set </h2 >
                                < h3 className='text-white text-lg font-sans pr-3' > {formatTime(currentWeather.sunset)}  </h3 >

                            </div>


                        </div>
                    )}
                    {/* box2 start */}

                    {/* Forecast Container */}
                    <div className="Box2 text-white bg-gray-800 h-28 mt-7 flex gap-4 rounded-lg px-3">

                        {forecastData.map((item, index) => {
                            const WeatherIcon = weatherIconMap[item.icon];

                            return (
                                <div
                                    key={index}
                                    className="p-2 flex-1 justify-center text-center hover:scale-110 duration-300 hover:bg-white hover:text-black hover:rounded-2xl"
                                >
                                    <ul>
                                        <li className="flex justify-center">
                                            {WeatherIcon && (
                                                <WeatherIcon size={38} className="text-yellow-400" />
                                            )}
                                        </li>
                                        <li className="font-semibold">{item.day}</li>
                                        <li>{item.temp}°C</li>
                                    </ul>
                                </div>
                            );
                        })}

                    </div>


                    {/*  Location search  */}
                    <div className='Box3  mt-2 flex justify-evenly  p-2 bg-gray-800 rounded-lg hover:cursor-pointer hover:bg-gray-700 '>

                        <CiLocationOn className='text-white mt-1.5 ' />

                        <form onSubmit={handelSubmit}>
                            <input

                                type="text"
                                value={inputValue}
                                placeholder='change location'
                                className='outline-hidden text-white'
                                onChange={(dets) => { setInputValue(dets.target.value) }}
                            />

                            <input
                                type="Submit"
                                className='text-white h-7 w-15 border border-blue-300 bg-emerald-600 hover:bg-emerald-800 cursor-pointer rounded-lg'
                            />


                        </form>


                    </div>


                </div>

            </div>



        </>
    )
}

export default Main