import AscDescButton from "../components/buttons/AscDescButton";
import FilterDropDown from "../components/FilterDropDown";
import TodoTile from "../components/TodoTile";
import type { TodoStructure } from "../constant";

interface IncompleteTodosProps {
  todos: TodoStructure[];
}

function IncompleteTodos({ todos }: IncompleteTodosProps) {
  console.log(todos);

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Incomplete Tasks</h1>
      <div className="flex flex-row gap-2 justify-start items-center">
        <FilterDropDown />
        <AscDescButton title="ASC" onClick={() => {}} />
        <AscDescButton title="DESC" onClick={() => {}} />
      </div>
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
