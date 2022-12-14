import React from "react";

const TodoHeader = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }

  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: "600",
          marginBottom: "2rem",
          lineHeight: "1em",
          color: "tomato",
          textTransform: "lowercase",
          textAlign: "center",
        }}>
        To do list:
      </h1>
    </header>
  )
}

export default TodoHeader;