import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import type { Task } from "./models/Task";

function App() {
  // ---------------------------
  // THEME STATE (Dark / Light)
  // ---------------------------
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // ---------------------------
  // MAIN TASK LIST STATE
  // ---------------------------
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ---------------------------
  // FILTER STATE
  // ---------------------------
  const [filter, setFilter] = useState<string>("All");

  // ---------------------------
  // DERIVED COUNTS
  // ---------------------------
  const completedCount = tasks.filter((t) => t.completed).length;
  const pendingCount = tasks.filter((t) => !t.completed).length;

  // ---------------------------
  // HANDLERS
  // ---------------------------
  const handleAddTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleClearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed));
  };

  // ---------------------------
  // FILTERED TASKS (Derived)
  // ---------------------------
  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.category === filter);

  // ---------------------------
  // UI WRAPPER BASED ON THEME
  // ---------------------------
  return (
    <div
      className={
        theme === "dark"
          ? "bg-dark text-white min-vh-100"
          : "bg-light min-vh-100"
      }
    >
      {/* NAVBAR WITH THEME TOGGLE */}
      <Navbar theme={theme} setTheme={setTheme} />

      <div className="container mt-4">
        <div className="row g-3">
          {/* -------------------- */}
          {/* LEFT COLUMN */}
          {/* -------------------- */}
          <div className="col-12 col-md-4">
            <AddTaskForm onAddTask={handleAddTask} />
            <TaskFilter filter={filter} onFilterChange={setFilter} />
          </div>

          {/* -------------------- */}
          {/* RIGHT COLUMN */}
          {/* -------------------- */}
          <div className="col-12 col-md-8">
            <div className="alert alert-info d-flex justify-content-between">
              <span>Completed: {completedCount}</span>
              <span>Pending: {pendingCount}</span>
            </div>

            <button
              className="btn btn-outline-secondary mb-2"
              onClick={handleClearCompleted}
            >
              Clear Completed Tasks
            </button>

            <TaskList
              tasks={filteredTasks}
              onDeleteTask={handleDeleteTask}
              onToggleComplete={handleToggleComplete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
