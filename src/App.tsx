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
  const totalTasks = tasks.length;

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

      <div className="container mt-4 mb-5">
        {/* Stats Card */}
        <div className="stats-card">
          <div className="row g-3">
            <div className="col-12 col-sm-4">
              <div className="stat-item">
                <span className="stat-number">{totalTasks}</span>
                <span className="stat-label">Total</span>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="stat-item">
                <span className="stat-number">{pendingCount}</span>
                <span className="stat-label">Pending</span>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="stat-item">
                <span className="stat-number">{completedCount}</span>
                <span className="stat-label">Done</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* -------------------- */}
          {/* LEFT COLUMN */}
          {/* -------------------- */}
          <div className="col-12 col-lg-4">
            <AddTaskForm onAddTask={handleAddTask} />
            <TaskFilter filter={filter} onFilterChange={setFilter} />
          </div>

          {/* -------------------- */}
          {/* RIGHT COLUMN */}
          {/* -------------------- */}
          <div className="col-12 col-lg-8">
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-4 gap-2">
              <h4 className="section-header mb-0">
                <i className="bi bi-list-check me-2"></i>
                Your Tasks
              </h4>
              {completedCount > 0 && (
                <button
                  className="btn btn-outline-danger btn-enhanced"
                  onClick={handleClearCompleted}
                >
                  <i className="bi bi-trash me-2"></i>
                  Clear Completed
                </button>
              )}
            </div>

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
