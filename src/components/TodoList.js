import React from "react"
import TodoItem from './TodoItem'

const TodoList = (props) => {
  return (
    <ul>
      {props.toDos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={this.props.handleChangeProps}
          deleteTodoProps={this.props.deleteTodoProps}
          setUpdate={this.props.setUpdate}
        />
      ))}
    </ul>
  )
}

export default TodoList;
