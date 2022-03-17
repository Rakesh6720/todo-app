import React from "react";

interface TodoListProps {
  items: { id: string; text: string }[];
}

const TodoList = (props: TodoListProps) => {
  return (
    // map over todos array to create copy of array
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
