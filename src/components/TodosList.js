import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({ todos, deleteTodoProps, updateTodo }) => {
  return (
    <div class="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodoProps={deleteTodoProps}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default TodosList;
