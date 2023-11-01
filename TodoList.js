import React, { useState } from 'react';

const initialTodos = Array(10).fill(false);

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const handleTodoToggle = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = !updatedTodos[index];
    setTodos(updatedTodos);
  };

  const calculateProgress = () => {
    const completedCount = todos.filter((todo) => todo).length;
    return (completedCount / todos.length) * 100;
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo}
              onChange={() => handleTodoToggle(index)}
            />
            Task {index + 1}
          </li>
        ))}
      </ul>
      <div>
        <progress max="100" value={calculateProgress()} />
        <p>Progress: {calculateProgress()}%</p>
      </div>
    </div>
  );
}

export default TodoList;
