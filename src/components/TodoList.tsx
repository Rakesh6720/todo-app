import React from "react";

const TodoList: React.FC = () => {
  // create todos constant
  const todos = [{ id: "t1", text: "Finish the course" }];
  return (
    // map over todos array to create copy of array
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
