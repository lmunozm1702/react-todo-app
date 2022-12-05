import React, { Component } from "react";

class TodoInput extends Component {
  state = {
    title: ''
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: ''
      });
    } else {
      alert("Please write an item")
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a task..."
          value={this.state.title}
          onChange={this.onChange}
          name="title"
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default TodoInput;