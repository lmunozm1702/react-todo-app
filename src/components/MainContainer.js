import React from "react"
import { v4 as uuidv4 } from 'uuid'
import TodoList from './TodoList'
import TodoHeader from "./TodoHeader"
import TodoInput from "./TodoInput"
class MainContainer extends React.Component {
  state = {
    toDos: [],
  }

  handleChange = (id) => {
    this.setState(prevState => ({
      toDos: prevState.toDos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      }),
    }));
  }

  deleteTodo = (id) => {
    this.setState({
      toDos: [
        ...this.state.toDos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  }

  addTodoItem = (title) => {
    const newTask = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({
      toDos: [...this.state.toDos, newTask]
    });
  };

  setUpdate = (updatedTitle, id) => {
    this.setState({
      toDos: this.state.toDos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      }),
    })
  }

  componentDidMount() {
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)
    if (loadedTodos) {
      this.setState({
        toDos: loadedTodos
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.toDos !== this.state.toDos) {
      const temp = JSON.stringify(this.state.toDos)
      localStorage.setItem("todos", temp)
    }
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <TodoHeader />
          <TodoInput addTodoProps={this.addTodoItem} />
          <TodoList
            toDos={this.state.toDos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.deleteTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    )
  }
}

export default MainContainer;
