import { useState } from "react";
import AscDescButton from "../components/buttons/AscDescButton";
import FilterDropDown from "../components/FilterDropDown";
import TodoTile from "../components/TodoTile";
import type { TodoStructure } from "../constant";
import Popup from "../components/Popup";
import dateFormater from "../utils/dateFormater";

interface IncompleteTodosProps {
  todos: TodoStructure[];
}

function IncompleteTodos({ todos }: IncompleteTodosProps) {
  const [popupTodoDetails, setPopupTodoDetails] = useState({
    _id: "test_id",
    title: "test_title",
    isComplete: "false",
    dueDate: "test_due_date",
    formatedDueDate: "",
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  async function popupTodoDetailsUpdate(todo: any) {
    todo.formatedDueDate = await dateFormater(todo.dueDate);
    setPopupTodoDetails({ ...todo });
    setIsPopupOpen(true);
  }

  function popupEditButton() {
    console.log("This is popup: ", popupTodoDetails);
  }

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
            onClick={() => {
              popupTodoDetailsUpdate(todo);
            }}
          />
        );
      })}
      <Popup
        isOpen={isPopupOpen}
        title="Todo Task Details"
        onClose={() => setIsPopupOpen(false)}
        children={
          <div>
            <div>
              Title: <span>{popupTodoDetails?.title}</span>
            </div>
            <div>
              Is Complete: <span>{popupTodoDetails?.isComplete}</span>
            </div>
            <div>
              Due Date: <span>{popupTodoDetails?.formatedDueDate}</span>
            </div>
          </div>
        }
        footer={
          <div>
            <button onClick={() => popupEditButton()}>Print data</button>
          </div>
        }
      />
    </>
  );
}

export default IncompleteTodos;
