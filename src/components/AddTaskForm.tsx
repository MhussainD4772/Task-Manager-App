import { useState } from "react";
import type { Task } from "../models/Task";

interface AddTaskFormProps {
  onAddTask: (task: Task) => void;
}

function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title,
      category,
      completed: false,
    };

    onAddTask(newTask);

    // Reset form fields to default state
    setTitle("");
    setCategory("");
  };

  return (
    <div className="card card-enhanced">
      <div className="card-header">
        <i className="bi bi-plus-circle me-2"></i>
        Add New Task
      </div>
      <div className="card-body p-4">
        <form onSubmit={handleSubmit}>
          {/* Task Title */}
          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">
              <i className="bi bi-pencil me-1"></i>
              Task Title
            </label>
            <input
              type="text"
              className="form-control form-control-enhanced"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a task title..."
              required
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">
              <i className="bi bi-tag me-1"></i>
              Category
            </label>
            <select
              className="form-select form-select-enhanced"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              <option value="Work">💼 Work</option>
              <option value="Study">📚 Study</option>
              <option value="Personal">👤 Personal</option>
              <option value="Fitness">💪 Fitness</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-primary-enhanced btn-enhanced w-100"
          >
            <i className="bi bi-plus-lg me-2"></i>
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTaskForm;
