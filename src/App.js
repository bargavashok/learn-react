import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './AddTask';

const App = () => {
  
	const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor\'s Appointment',
        day: 'Feb 5th at 14 30',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 13 30',
        reminder: false
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 16 30',
        reminder: true
    }
  ]) 
  
	// Add task
const addTask = (task) => {
	const id = Math.floor(Math.random() * 10000) +1;
	const newtask = { id, ...task };
	setTasks ([...tasks, newtask])
}

  // Delete Task
  const deleteTask = (id) => {
  	setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
		console.log(id);
		setTasks( tasks.map( (task) => 
			task.id === id ? { ...task, reminder: !task.reminder } : task	)
		);
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask) } showAdd={showAddTask} />
			{ showAddTask && <AddTask onAdd={addTask} /> }
      {	tasks.length === 0 ? 'No Tasks to show'
        : <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> }
    </div>
  );
}

export default App;
