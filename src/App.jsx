import { useEffect, useState } from 'react';
import Search from './Search';
import Img from './Img';
import Content from './Content';
import Cord from './Cord';
import Speed from './Speed';
import Footer from './footer';

// images

import Clear from './assets/clear.png.png';
import Cloud from './assets/cloud.png';
import Drizzle from './assets/drizzle.png';
import Rain from './assets/rain.png';
import Snow from './assets/snow.png';


// stylesheet

import './App.css'


const MainApp = ({text, img, setText, setImg, temp, setTemp, location, setLocation, country, setCountry, lat, setLat, lon, setLon, humidity, setHumidity, windSpeed, setWindSpeed}) => {

  const[cityNotFound, setCityNotFound] = useState(false);
  const[loading, setLoading] = useState(false)
  const [error, setError] = useState(null) 



  const weatherIconMap = {
    "01d" : Clear,
    "01n" : Clear,
    "02d" : Cloud,
    "02n" : Cloud,
    "03d" : Drizzle,
    "03n" : Drizzle,
    "04d" : Drizzle,
    "04n" : Drizzle,
    "09d" : Rain,
    "09n" : Rain,
    "10d" : Rain,
    "10n" : Rain,
    "13d" : Snow,
    "13n" : Snow
  }


async function weatherApi() {
  const API_Id = 'af9edecc53dd880e01683a082107fc14' 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${API_Id}&units=Metric`;
  setLoading(true);
  try
  {
    const responce = await fetch(url);
  const data = await responce.json();
  setTemp(Math.floor(data.main.temp));
  setLocation(data.name);
  setCountry(data.sys.country);
  setLat(data.coord.lat);
  setLon(data.coord.lon)
  setHumidity(data.main.humidity)
  setWindSpeed(data.wind.speed)
  const weathericon = data.weather[0].icon
  setImg(weatherIconMap[weathericon]||Clear)
  setCityNotFound(false)

  if(data.cod === "404")
  {
    console.error('city not found');
    setCityNotFound(true)
    setLoading(false)
    return;
    
  }
  }
catch
{
  setError("City Not Found ")
  window.location.reload()
}
finally
{
  setLoading(false)
}

  
  
}


  useEffect(function(){
    weatherApi()
  },[])



  return(
    
    <>
      <Search text={text} setText={setText} weatherApi={weatherApi} />
      <Img img={img} setImg={setImg} />
      <Content temp={temp} setTemp={setTemp} location={location} setLocation={setLocation} country={country} setCountry={setCountry} />
      <Cord lat={lat} setLat={setLat} lon={lon} setLon={setLon} />
      <Speed humidity={humidity} setHumidity={setHumidity} windSpeed={windSpeed} setWindSpeed={setWindSpeed} />
      <Footer />

     {loading && <div className='loding-message'>Loading...</div>} 
      {error && <div className='error-message'>{error}</div>}
      <div className={cityNotFound ? "city-not-found" : "city-not-found-none"}>City Not Found</div>
      
     


    </>
  )
}




const App = () => {
  const [img, setImg] = useState()
  const [text, setText] = useState('Cuddalore');
  const [temp, setTemp] = useState(0)
  const [location, setLocation] = useState('Cuddalore');
  const [country, setCountry] = useState('IN');
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [humidity, setHumidity] = useState(0)
  const [windSpeed, setWindSpeed] = useState(0)



  return (
    
    <div className='main-container'>
      
      <MainApp text={text} setText={setText} img={img} setImg={setImg} temp={temp} setTemp={setTemp} location={location} setLocation={setLocation} country={country} setCountry={setCountry} lat={lat} setLat={setLat} lon={lon} setLon={setLon} humidity={humidity} setHumidity={setHumidity} windSpeed={windSpeed} setWindSpeed={setWindSpeed}   />
    </div>
  )
}

export default App
