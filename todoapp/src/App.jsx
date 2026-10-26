import { useState } from "react"

export default function App() {

  const [input, setInput] = useState("")
  const [data, setData] = useState([])

  const addTask = () => {
    setData(prev => [...prev, input])
    console.log(data);
  }

  const taskComplete = (index) => {
    setData(prev => prev.filter((_, i) => i !== index));
    console.log(data);
  }

  return (
    <>
      <h1>To-do App</h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => {
        if (e.key === "Enter") {
          addTask();
        }
      }} />
      <button onClick={() => addTask()}>Add Task</button>

      <ul>
        {data.map((value, index) => (
          <li key={index}>{value} <button onClick={() => taskComplete(index)}>complete</button></li>
        ))}
      </ul>

    </>
  )
}