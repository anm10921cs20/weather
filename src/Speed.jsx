import Humidity from './assets/weather.png';
import Windspeed from './assets/windspeed.png';

const Speed = ({humidity, windSpeed}) => {
  return (
    <div className='speed-container'>
        <div className='humidity'>
            <img src={Humidity} alt="" />
            <p>{humidity}%</p>
            <p>Humidity</p>
        </div>
        <div className='windspeed'>
            <img src={Windspeed} alt="" />
            <p>{windSpeed} km/h</p>
            <p>Wind Speed</p>
        </div>

    </div>
  )
}

export default Speed
