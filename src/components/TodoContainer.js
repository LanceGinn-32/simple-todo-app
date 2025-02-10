import React, { useState } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: "Setup development environment",
      status: "todo",
    },
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: "Develop website and add content",
      status: "in-progress",
    },
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: "Deploy to live server",
      status: "done",
    },
  ]);

  const updateTodo = (id, newTitle, newStatus) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = newTitle;
          todo.status = newStatus;
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      // id: uuid.v4(),
      id: uuidv4(),
      title: title,
      status: "todo",
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="container">
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <div class="todo-columns">
        <TodosList
          title={"Todo"}
          todos={todos.filter(({ status }) => status === "todo")}
          updateTodo={updateTodo}
          deleteTodoProps={delTodo}
        />
        <TodosList
          title={"In Progress"}
          todos={todos.filter(({ status }) => status === "in-progress")}
          updateTodo={updateTodo}
          deleteTodoProps={delTodo}
        />
        <TodosList
          title={"Done"}
          todos={todos.filter(({ status }) => status === "done")}
          updateTodo={updateTodo}
          deleteTodoProps={delTodo}
        />
      </div>
    </div>
  );
};
export default TodoContainer;
