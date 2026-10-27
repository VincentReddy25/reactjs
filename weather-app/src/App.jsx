import { useState } from "react"
import axios from "axios"
import "./App.css"

export default function App() {
  const [city, setCity] = useState("")
  const [data, setData] = useState(null)
  const [error, setError] = useState("")

  const API_KEY = "YOUR_API_KEY"

  const getWeatherData = async () => {
    if (!city.trim()) {
      setError("Please enter a city name")
      setData(null)
      return
    }

    try {
      setError("")
      setData(null)

      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city.trim())}&appid=${API_KEY}&units=metric`
      )

      setData(res.data)
    } catch (err) {
      setData(null)

      if (err.response?.status === 404) {
        setError("City not found. Please enter a valid city name.")
      } else if (err.response?.status === 401) {
        setError("Invalid API key. Please check your API key.")
      } else {
        setError("Something went wrong. Please try again.")
      }
    }
  }

  return (
    <main className="weather-app">
      <section className="weather-card">
        <h1>Current Weather</h1>

        <div className="search">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") getWeatherData()
            }}
            placeholder="Enter city name"
          />
          <button onClick={getWeatherData}>
            Get Weather
          </button>
        </div>

        {error && <p className="weather-error">{error}</p>}

        {data && (
          <div className="weather-details">
            <h2>{data.name}, {data.sys.country}</h2>
            <p>Temperature: {data.main.temp}°C</p>
            <p>Weather: {data.weather[0].description}</p>
            <p>Humidity: {data.main.humidity}%</p>
          </div>
        )}
      </section>
    </main>
  )
}