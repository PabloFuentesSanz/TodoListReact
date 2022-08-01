import React, {useState} from 'react'
import ToDoItem from './toDoItem';

function ToDoList() {
    const [title, setTitle] = useState('');
    const [tasks, setTasks] = React.useState([]);

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            done: false
        }

        setTasks([...tasks, newTodo]);

    }

    const handleUpdate = (id, title) => {
        const temp = [...tasks]
        const item = temp.find(item => item.id === id);
        item.title = title;
        setTasks(temp);
    }

    const handleDelete = (id) => {
        const temp = [...tasks]
        const item = temp.find(item => item.id === id);
        temp.splice(temp.indexOf(item), 1);
        setTasks(temp);
    }

  return (
    <div className="todoContainer">
        <form className="todoForm">
            <input type="text" name="todo" className="todoInput" value={title} onChange={handleChange}/>
            <input type="submit" value="Create todo" className="button buttonCreate" onClick={handleClick} />
        </form>
        {
            tasks.map((task) => {
                return <ToDoItem  key={task.id} task={task} onUpdate={handleUpdate} onDelete={handleDelete}/>
            })
        }
    </div>
  )
}

export default ToDoList