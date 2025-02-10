import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({ title, todos, deleteTodoProps, updateTodo }) => {
  return (
    <div class="todo-list">
      <h2>{title}</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodoProps={deleteTodoProps}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
