import { useState } from "react"
import axios from 'axios'
import './App.css'

export default function App() {

  const [city, setCity] = useState("")
  const [data, setData] = useState(null)
  const API_KEY = "your_api_key"

  const getWeatherData = async () => {
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      setData(res.data)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main className="weather-app">
      <section className="weather-card">
        <h1>Current weather</h1>

        <div className="search">
          <input
            type="text"
            placeholder="Enter a city"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <button onClick={getWeatherData}>Get weather</button>
        </div>

        {data && (
          <div className="weather-details">
            <h2>{data.name}</h2>
            <p>Temperature: {data.main.temp}°C</p>
            <p>Weather: {data.weather[0].description}</p>
            <p>Humidity: {data.main.humidity}%</p>
          </div>
        )}
      </section>
    </main>
  )
}