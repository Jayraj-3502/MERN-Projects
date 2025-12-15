import { useState } from "react";
import IncompleteTodos from "../features/IncompleteTodos";
import { todos, type TodoStructure } from "../constant";
import CompleteTodos from "../features/CompleteTodos";

function Home() {
  const [open, setOpen] = useState(false);
  const completedTodos: TodoStructure[] = todos.filter(
    (todo) => todo.isComplete
  );

  const inCompletedTodos: TodoStructure[] = todos.filter(
    (todo) => !todo.isComplete
  );

  return (
    <>
      <div className="grid grid-cols-2 gap-5 p-10">
        <div className="grid grid-cols-1">
          <IncompleteTodos todos={completedTodos} />
        </div>
        <div>
          <CompleteTodos todos={inCompletedTodos} />
        </div>
      </div>
    </>
  );
}

export default Home;
