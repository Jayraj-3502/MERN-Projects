import TodoTile from "../components/TodoTile";
import type { TodoStructure } from "../constant";

interface CompleteTodosProps {
  todos: TodoStructure[];
}

function CompleteTodos({ todos }: CompleteTodosProps) {
  console.log(todos);

  return (
    <>
      <div>Complete Todos</div>
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

export default CompleteTodos;
