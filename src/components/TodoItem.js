import React, { useState, useEffect } from "react"
import styles from "./TodoItem.module.css"

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true)
  }

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false)
    }
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const { id, title, completed } = props.todo

  let viewMode = {};
  let editMode = {};

  editing ? viewMode.display = "none" : editMode.display = "none";

  useEffect(() => {
    return () => {
      console.log("Cleaning up...")
    }
  }, [])

  return (
    <li key={id} className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
          className={styles.checkbox} />
        <button
          onClick={() => props.deleteTodoProps(id)}>
          Delete
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={title}
        onChange={event => {
          props.setUpdate(event.target.value, id)
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>)
}


export default TodoItem;