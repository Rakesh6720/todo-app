import { useRef } from "react";

interface NewTodoProps {
  addTodo: (text: string) => void;
}
export default function NewTodo({ addTodo }: NewTodoProps) {
  const textInputRef = useRef<HTMLInputElement>(null);

  function todoSubmitHandler(e: React.FormEvent) {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    addTodo(enteredText);
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
}
