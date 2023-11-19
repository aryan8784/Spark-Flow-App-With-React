import "./App.css";
import { useState, useEffect } from "react";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";
import Todoicon from "./assets/directHit.png";
import Doingicon from "./assets/glowingstar.png";
import Doneicon from "./assets/check.png";

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

function App() {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  return (
    <>
      <div className="app">
        <TaskForm setTasks={setTasks} />
        <main className="app-main">
          <TaskColumn
            title="To do"
            icon={Todoicon}
            tasks={tasks}
            status="todo"
            handleDelete={handleDelete}
          />
          <TaskColumn
            title="Doing"
            icon={Doingicon}
            tasks={tasks}
            status="doing"
            handleDelete={handleDelete}
          />
          <TaskColumn
            title="Done"
            icon={Doneicon}
            tasks={tasks}
            status="done"
            handleDelete={handleDelete}
          />
        </main>
      </div>
    </>
  );
}

export default App;
