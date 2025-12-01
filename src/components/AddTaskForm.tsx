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
    <div className="card p-3">
      <h5>Add Task</h5>

      <form onSubmit={handleSubmit}>
        {/* Task Title */}
        <div className="mb-3">
          <label className="form-label">Task Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a task"
          />
        </div>

        {/* Category */}
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Work">Work</option>
            <option value="Study">Study</option>
            <option value="Personal">Personal</option>
            <option value="Fitness">Fitness</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTaskForm;
