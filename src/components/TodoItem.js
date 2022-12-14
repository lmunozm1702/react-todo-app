import React from "react"
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
  state = {
    editing: false,
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    })
  }

  handleUpdatedDone = event => {
    if (event.key === "Enter") {
      this.setState({ editing: false })
    }
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    const { id, title, completed } = this.props.todo

    let viewMode = {};
    let editMode = {};

    this.state.editing ? viewMode.display = "none" : editMode.display = "none";

    return (
      <li key={id} className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
            className={styles.checkbox} />
          <button
            onClick={() => this.props.deleteTodoProps(id)}>
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
            this.props.setUpdate(event.target.value, id)
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>)
  }
}

export default TodoItem;