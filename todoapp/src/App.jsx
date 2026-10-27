import { useState } from "react"
import "./App.css"

export default function App() {
  const [input, setInput] = useState("")
  const [data, setData] = useState([])
  const [completed, setCompleted] = useState([])

  const addTask = () => {
    const trimmed = input.trim()
    if (!trimmed) return

    setData((prev) => [...prev, trimmed])
    setInput("")
  }

  const taskComplete = (index) => {

    setCompleted(prev => [...prev, data[index]])
    setData((prev) => prev.filter((_, i) => i !== index))

  }

  const deleteTask = (index) => {
    setData(prev => prev.filter((_, i) => i !== index))
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

      <div className="task-sections">
        <div className="task-section">
          <h3 className="section-title">To be done</h3>
          <ul className="todo-list">
            {data.length === 0 ? (
              <li className="empty-state">No tasks yet. Add one above.</li>
            ) : (
              data.map((value, index) => (
                <li className="todo-item" key={index}>
                  <span>{value}</span>
                  <span>
                    <button className="complete-btn" onClick={() => taskComplete(index)}>Complete</button>
                    <button onClick={() => deleteTask(index)}>delete</button>
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>

        <div className="task-section">
          <h3 className="section-title">Completed</h3>
          <ul className="completed-list">
            {completed.length === 0 ? (
              <li className="empty-state">Completed tasks will appear here.</li>
            ) : (
              completed.map((value, index) => (
                <li className="completed-item" key={index}>
                  <span>{value}</span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

    </div>
  )
}