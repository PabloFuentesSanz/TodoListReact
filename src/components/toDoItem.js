import { useState } from "react";

function ToDoItem({ task, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  // New Component
  function FormEdit() {
    const [newValue, setNewValue] = useState(task.title);

    const handleChange = (e) => {
      setNewValue(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    const handleClick = (e) => {
      onUpdate(task.id, newValue);
      setIsEdit(false);
    };

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          value={newValue}
          onChange={handleChange}
        />
        <button className="button buttonCreate" onClick={handleClick}>
          Update
        </button>
      </form>
    );
  }

  return (
    <div className="todoItem">
      {isEdit ? (
        <FormEdit />
      ) : (
        <>
          <div className="containerItem">
            <span className="titleSpan">{task.title}</span>
            <div>
              <button
                onClick={() => setIsEdit(true)}
                className="button buttonEdit"
              >
                Edit
              </button>
              <button
                onClick={(e) => onDelete(task.id)}
                className="button buttonDelete"
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ToDoItem;
