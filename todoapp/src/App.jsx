import { useState } from "react"
import "./App.css"

export default function App() {
  const [input, setInput] = useState("")
  const [data, setData] = useState([])
  const [completed, setCompleted] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  // Add a new task or save an edited task
  const addTask = () => {
    const trimmed = input.trim()

    if (!trimmed) return

    if (editIndex !== null) {
      setData((prev) =>
        prev.map((value, index) =>
          index === editIndex ? trimmed : value
        )
      )

      setEditIndex(null)
    } else {
      setData((prev) => [...prev, trimmed])
    }

    setInput("")
  }

  // Edit a task
  const editTask = (index) => {
    setInput(data[index])
    setEditIndex(index)
  }

  // Mark a task as completed
  const taskComplete = (index) => {
    setCompleted((prev) => [...prev, data[index]])
    setData((prev) => prev.filter((_, i) => i !== index))

    // Cancel editing if the selected task is completed
    if (editIndex === index) {
      setInput("")
      setEditIndex(null)
    } else if (editIndex !== null && editIndex > index) {
      setEditIndex((prev) => prev - 1)
    }
  }

  // Delete a pending task
  const deleteTask = (index) => {
    setData((prev) => prev.filter((_, i) => i !== index))

    // Keep the editing index synchronized after deletion
    if (editIndex === index) {
      setInput("")
      setEditIndex(null)
    } else if (editIndex !== null && editIndex > index) {
      setEditIndex((prev) => prev - 1)
    }
  }

  // Delete a completed task
  const deleteCompletedTask = (index) => {
    setCompleted((prev) => prev.filter((_, i) => i !== index))
  }

  // Cancel editing
  const cancelEdit = () => {
    setInput("")
    setEditIndex(null)
  }

  return (
    <div className="todo-app">
      <h1>To-do App</h1>

      {/* Task input */}
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

            if (e.key === "Escape") {
              cancelEdit()
            }
          }}
          placeholder="Add a task"
        />

        <button className="add-btn" onClick={addTask}>
          {editIndex !== null ? "Save Changes" : "Add Task"}
        </button>

        {editIndex !== null && (
          <button className="cancel-btn" onClick={cancelEdit}>
            Cancel
          </button>
        )}
      </div>

      {/* Task sections */}
      <div className="task-sections">

        {/* Pending tasks */}
        <div className="task-section">
          <h3 className="section-title">To be done</h3>

          <ul className="todo-list">
            {data.length === 0 ? (
              <li className="empty-state">
                No tasks yet. Add one above.
              </li>
            ) : (
              data.map((value, index) => (
                <li className="todo-item" key={index}>
                  <span>{value}</span>

                  <span className="task-actions">
                    <button
                      className="edit-btn"
                      onClick={() => editTask(index)}
                    >
                      Edit
                    </button>

                    <button
                      className="complete-btn"
                      onClick={() => taskComplete(index)}
                    >
                      Done
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => deleteTask(index)}
                    >
                      Delete
                    </button>
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Completed tasks */}
        <div className="task-section">
          <h3 className="section-title">Completed</h3>

          <ul className="completed-list">
            {completed.length === 0 ? (
              <li className="empty-state">
                Completed tasks will appear here.
              </li>
            ) : (
              completed.map((value, index) => (
                <li className="completed-item" key={index}>
                  <span>{value}</span>

                  <button
                    className="delete-btn"
                    onClick={() => deleteCompletedTask(index)}
                  >
                    Delete
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>

      </div>
    </div>
  )
}