import { useEffect, useState } from "react"
import axios from 'axios'

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
    <>
      <h1>Current weather</h1>

      <input type="text" onChange={e => setCity(e.target.value)} />
      <button onClick={getWeatherData}>get weather</button>
      <div>

        {data && (
          <>
            <h2>{data.name}</h2>
            <p>Temperature: {data.main.temp}°C</p>
            <p>Weather: {data.weather[0].description}</p>
            <p>Humidity: {data.main.humidity}%</p>
          </>
        )}

      </div>
    </>
  )
}