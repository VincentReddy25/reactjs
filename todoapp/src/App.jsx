import { useState } from "react"
import "./App.css"

export default function App() {
  const [input, setInput] = useState("")
  const [data, setData] = useState([])

  const addTask = () => {
    const trimmed = input.trim()
    if (!trimmed) return

    setData((prev) => [...prev, trimmed])
    setInput("")
  }

  const taskComplete = (index) => {
    setData((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="todo-app">
      <h1>To-do App</h1>
      <div className="task-form">
        <input
          className="task-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask()
            }
          }}
          placeholder="Add a task"
        />
        <button className="add-btn" onClick={addTask}>Add Task</button>
      </div>

      <ul className="todo-list">
        {data.map((value, index) => (
          <li className="todo-item" key={index}>
            <span>{value}</span>
            <button className="complete-btn" onClick={() => taskComplete(index)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}