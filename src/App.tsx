import React, {useState} from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
type Task = {
  id: number;
  text: string;
  done: boolean;
};

function App() {
  const initialTasks = [
    {id: 0, text: "Visit Kafka Museum", done: true},
    {id: 1, text: "Watch a puppet show", done: false},
    {id: 2, text: "Lennon Wall pic", done: false},
  ];
  const [tasks, setTasks] = useState(initialTasks);
  const handleAddTask = (task: string) => {
    setTasks([...tasks, {id: tasks.length, text: task, done: false}]);
  };
  function handleChangeTask(updatedTask: Task) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  }
  function handleDeleteTask(taskId: number) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }
  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export default App;
