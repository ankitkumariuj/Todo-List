
import React, {useState} from 'react'

export default function Textform(props) {

  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() === '') return;
    setTasks([...tasks, taskText]);
    setTaskText('');
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditText(tasks[index]);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleSaveEdit = (index) => {
    const newTasks = [...tasks];
    newTasks[index] = editText;
    setTasks(newTasks);
    setEditIndex(null);
    setEditText('');
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <textarea class="form-control" id="exampleFormcontrolTextarea1" value={taskText}
        onChange={handleInputChange}rows="5"  ></textarea>

<button class="btn btn-outline-success  my-3"  type="submit" onClick={handleAddTask} >Add Task </button> 

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={handleEditChange}
                />
                <button class="btn btn-outline-success mx-2 my-1"  type="submit" onClick={() => handleSaveEdit(index)}>Save </button> 

                
              </>
            ) : (
              <>
                {task}
                <button class="btn btn-outline-primary mx-3 my-3"  type="submit" onClick={() => handleEditTask(index)}>Edit</button>

                <button class="btn btn-outline-danger" type="submit"  onClick={() => handleDeleteTask(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

