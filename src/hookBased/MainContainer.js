import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import TodoList from './TodoList'
import TodoHeader from "./TodoHeader"
import TodoInput from "./TodoInput"

const MainContainer = () => {
  const [toDos, setTodos] = useState([])

  const handleChange = (id) => {
    setTodos(prevState => prevState.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo;
    }))
  }

  const deleteTodo = (id) => {
    setTodos([
      ...toDos.filter(todo => {
        return todo.id !== id;
      }),
    ])
  }

  const addTodoItem = (title) => {
    const newTask = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    setTodos([...toDos, newTask])
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      toDos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }

  return (
    <div className="container">
      <div className="inner">
        <TodoHeader />
        <TodoInput addTodoProps={addTodoItem} />
        <TodoList
          toDos={toDos}
          handleChangeProps={handleChange}
          deleteTodoProps={deleteTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  )
}

export default MainContainer;
