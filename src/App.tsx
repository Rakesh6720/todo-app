import { useState } from "react";
import { Todo } from "./models/todo.model";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(todo: string) {
    setTodos([{ id: Math.random().toString(), text: todo }]);
    console.log(todos);
  }

  return (
    <div className="App">
      <NewTodo addTodo={addTodo} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
