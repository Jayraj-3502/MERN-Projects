import { useState } from "react";
import AscDescButton from "../components/buttons/AscDescButton";
import FilterDropDown from "../components/FilterDropDown";
import Popup from "../components/Popup";
import TodoTile from "../components/TodoTile";
import type { TodoStructure } from "../constant";
import dateFormater from "../utils/dateFormater";

interface CompleteTodosProps {
  todos: TodoStructure[];
}

function CompleteTodos({ todos }: CompleteTodosProps) {
  const [popupTodoDetails, setPopupTodoDetails] = useState({
    _id: "test_id",
    title: "test_title",
    isComplete: false,
    dueDate: "test_due_date",
    formatedDueDate: "",
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  async function popupTodoDetailsUpdate(todo: any) {
    console.log(todo);
    todo.formatedDueDate = await dateFormater(todo.dueDate);
    setPopupTodoDetails({ ...todo });
    setIsPopupOpen(true);
  }

  function popupEditButton() {
    console.log("This is popup: ", popupTodoDetails);
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Complete Tasks</h1>
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
              Is Complete:{" "}
              <span>
                {popupTodoDetails?.isComplete ? "Completed" : "Pending"}
              </span>
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

export default CompleteTodos;
