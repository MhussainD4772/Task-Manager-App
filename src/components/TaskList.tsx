import type { Task } from "../models/Task";

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

function TaskList({ tasks, onDeleteTask, onToggleComplete }: TaskListProps) {
  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case "Work":
        return "bg-primary";
      case "Study":
        return "bg-info text-dark";
      case "Personal":
        return "bg-success";
      case "Fitness":
        return "bg-warning text-dark";
      default:
        return "bg-secondary";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Work":
        return "💼";
      case "Study":
        return "📚";
      case "Personal":
        return "👤";
      case "Fitness":
        return "💪";
      default:
        return "📝";
    }
  };

  const getTaskCardClass = (task: Task) => {
    let classes = "task-card-enhanced";
    if (task.completed) {
      classes += " completed";
    }
    if (task.category) {
      classes += ` ${task.category.toLowerCase()}`;
    }
    return classes;
  };

  return (
    <div className="card card-enhanced">
      <div className="card-header d-flex justify-content-between align-items-center">
        <span>
          <i className="bi bi-list-task me-2"></i>
          Task List
        </span>
        <span className="badge bg-primary">{tasks.length}</span>
      </div>
      <div className="card-body p-4">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">
              <i className="bi bi-inbox"></i>
            </div>
            <h5 className="mb-2">No tasks yet</h5>
            <p className="text-muted mb-0">Start by adding a new task above!</p>
          </div>
        ) : (
          <div>
            {tasks.map((task) => (
              <div key={task.id} className={getTaskCardClass(task)}>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center flex-grow-1">
                    {/* Checkbox */}
                    <input
                      type="checkbox"
                      className="form-check-input form-check-input-enhanced me-3"
                      checked={task.completed}
                      onChange={() => onToggleComplete(task.id)}
                      style={{ flexShrink: 0 }}
                    />

                    {/* Title & Category */}
                    <div className="flex-grow-1">
                      <h6
                        className={`mb-2 fw-semibold ${
                          task.completed
                            ? "text-decoration-line-through text-muted"
                            : ""
                        }`}
                        style={{ fontSize: "1.05rem" }}
                      >
                        {task.title}
                      </h6>
                      <div className="d-flex align-items-center gap-2">
                        <span
                          className={`badge badge-enhanced ${getCategoryBadgeClass(
                            task.category
                          )}`}
                        >
                          {getCategoryIcon(task.category)}{" "}
                          {task.category || "Uncategorized"}
                        </span>
                        {task.completed && (
                          <span className="badge bg-success badge-enhanced">
                            <i className="bi bi-check-circle me-1"></i>
                            Completed
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Delete Button */}
                  <button
                    className="btn btn-delete-enhanced ms-3"
                    onClick={() => onDeleteTask(task.id)}
                    title="Delete task"
                    style={{ flexShrink: 0 }}
                  >
                    <i
                      className="bi bi-trash"
                      style={{ fontSize: "1.1rem" }}
                    ></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskList;
