import React from "react"
import TodoList from './TodoList'
import TodoHeader from "./TodoHeader"
class MainContainer extends React.Component {
  state = {
    toDos: [
      {
        id: 1,
        title: "Breakfast",
        completed: true
      },
      {
        id: 2,
        title: "Go to swim",
        completed: true
      },
      {
        id: 3,
        title: "Breakfast again",
        completed: false
      }
    ]
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

  render() {
    return (
      <div>
        <TodoHeader />
        <TodoList
          toDos={this.state.toDos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.deleteTodo} />
      </div>
    )
  }
}

export default MainContainer;
