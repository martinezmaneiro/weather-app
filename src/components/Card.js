import React from 'react';
import Spinner from './Spinner';
import '../assets/css/Card.css'

const Card =({loadingData, showData, weather, forecast})=>{

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year;


    var url = '';
    var iconUrl = '';

    var iconUrl3 ='';
    var iconUrl6 ='';
    var iconUrl9 ='';

    var forecastDate3 = '';
    var forecastDate6 = '';
    var forecastDate9 = '';

    if(loadingData){
        return <Spinner/>;
    }

    if(showData){
        url = 'http://openweathermap.org/img/w/';
        iconUrl = url + weather.weather[0].icon + '.png';

        iconUrl3 = url + forecast.list[1].weather[0] + '.png';
        iconUrl6 = url + forecast.list[2].weather[0] + '.png';
        iconUrl9 = url + forecast.list[3].weather[0] + '.png';

        forecastDate3 = forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[2].dt_txt.substring(11, 13);
        forecastDate9 = forecast.list[3].dt_txt.substring(11, 13);
    }

    return (
        <div className='mt-5'>
            {showData === true ? (
                    <div className='container'>
                        <div className='card mb-3 mx-auto bg-dark text-light'>
                            <div className='row g-0'>
                                <div className='col-md-4'>
                                    <h3 className='card-title'>{weather.name}</h3>
                                    <p className='card-date'>{date}</p>
                                    <h1 className='card-temp'>{(weather.main.temp -273.15).toFixed(1)}°C</h1>
                                    <p className='card-desc'><img src={iconUrl} alt='icon'/>{weather.weather[0].description}</p>
                                    <img src='https://images.pexels.com/photos/356286/pexels-photo-356286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='img-fluid rounded-start'/>
                                </div>
                                <div className='col-md-8'>
                                    <div className='card-body text-start mt-2'>
                                        <h5 className='card-text'>Max temperature: {(weather.main.temp_max - 273.15).toFixed(1)}°C </h5>
                                        <h5 className='card-text'>Min temperature: {(weather.main.temp_min - 273.15).toFixed(1)}°C </h5>
                                        <h5 className='card-text'>Wind chill: {(weather.main.feels_like - 273.15).toFixed(1)}°C </h5>
                                        <h5 className='card-text'>Humidity: {weather.main.humidity}%</h5>
                                        <h5 className='card-text'>Wind speed: {weather.wind.speed}m/s</h5>
                                    </div>
                                    <hr/>
                                    <div className='row mt-4'>
                                        <div className='col'>
                                            <p>{forecastDate3}hs</p>
                                            <p className='temp'>{(forecast.list[1].main.temp -273.15).toFixed(1)}°C</p>
                                        </div>
                                        <div className='col'>
                                            <p>{forecastDate6}hs</p>
                                            <p className='temp'>{(forecast.list[1].main.temp -273.15).toFixed(1)}°C</p>
                                        </div>
                                        <div className='col'>
                                            <p>{forecastDate9}hs</p>
                                            <p className='temp'>{(forecast.list[1].main.temp -273.15).toFixed(1)}°C</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ):(<h2 className='text-light'>Sin datos</h2>)
            }
        </div>
    )
}

export default Card;