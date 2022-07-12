import { useState, useEffect, useRef } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import Task from './components/Task';

function App() {

  const [tasks, setTasks] = useState([]);
  let lock = useRef(false);

  useEffect(() => {
    let savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if(savedTasks && !lock.current){
      setTasks(savedTasks);
      lock.current = true;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask(text) {
    let task = new Task(text);
    setTasks([...tasks, task]);
  }

  function checkTask(task) {
    tasks.forEach(item => {
      if(item.id === task.id){
        item.checked = !item.checked;
        setTasks([...tasks]);
      }
    })
  }

  function deleteTask(task) {
    let updatedTasks = tasks.filter(item => item.id !== task.id);
    setTasks(updatedTasks);
  }

  return (
    <div className="container">
      <h1>TO-DO LIST</h1>
      <Form addTask={addTask} />
      <List tasks={tasks} checkTask={checkTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;