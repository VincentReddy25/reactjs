import { useEffect, useState } from "react"
import axios from 'axios'

export default function App() {

  const [city, setCity] = useState("")
  const [data, setData] = useState([])
  const API_KEY = "a72e3f93515bd8af931d83b3fe1bff25"

  const getWeatherData = async () => {
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      setData(res)

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
        {/* {data.map(value)} */}
      </div>
    </>
  )
}