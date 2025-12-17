import { useEffect, useState } from "react";
import IncompleteTodos from "../features/IncompleteTodos";
import { todos, type TodoStructure } from "../constant";
import CompleteTodos from "../features/CompleteTodos";
import Pagination from "../components/Pagination";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/auth/authApi";

function Home() {
  const completedTodos: TodoStructure[] = todos.filter(
    (todo) => todo.isComplete
  );

  const inCompletedTodos: TodoStructure[] = todos.filter(
    (todo) => !todo.isComplete
  );

  return (
    <>
      <div className="grid grid-cols-2 gap-5 p-10">
        <div className="grid grid-cols-1 gap-2">
          <IncompleteTodos todos={inCompletedTodos} />
          <Pagination />
        </div>
        <div className="grid grid-cols-1 gap-2">
          <CompleteTodos todos={completedTodos} />
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default Home;
