import TodoTile from "../components/TodoTile";
import type { TodoStructure } from "../constant";

interface IncompleteTodosProps {
  todos: TodoStructure[];
}

function IncompleteTodos({ todos }: IncompleteTodosProps) {
  console.log(todos);

  return (
    <>
      <div>IncompleteTodos</div>
      {todos.map((todo) => {
        return (
          <TodoTile
            key={todo?.["_id"]}
            title={todo?.["title"]}
            onEdit={() => {}}
            onDelete={() => {}}
          />
        );
      })}
    </>
  );
}

export default IncompleteTodos;
