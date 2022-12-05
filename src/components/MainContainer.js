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
  render() {
    return (
      <div>
        <TodoHeader />
        <TodoList todos={this.state.toDos} />
      </div>
    )
  }
}

export default MainContainer;
