import type { Task } from "../models/Task";

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

function TaskList({ tasks, onDeleteTask, onToggleComplete }: TaskListProps) {
  return (
    <div className="card p-3 mt-3">
      <h5>Task List</h5>

      {tasks.length === 0 && <p className="text-muted mt-2">No tasks yet.</p>}

      {tasks.map((task) => (
        <div
          key={task.id}
          className={`card mb-3 p-3 d-flex flex-row justify-content-between align-items-center ${
            task.completed ? "opacity-50" : ""
          }`}
        >
          <div className="d-flex align-items-center">
            {/* Checkbox */}
            <input
              type="checkbox"
              className="form-check-input me-2"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
            />

            {/* Title & Category */}
            <div>
              <h6
                className="mb-1"
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.title}
              </h6>
              <span
                className={`badge ${
                  task.category === "Work"
                    ? "bg-primary"
                    : task.category === "Study"
                    ? "bg-info text-dark"
                    : task.category === "Personal"
                    ? "bg-success"
                    : "bg-warning text-dark"
                }`}
              >
                {" "}
                {task.category}
              </span>
            </div>
          </div>

          {/* Delete Button */}
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => onDeleteTask(task.id)}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
