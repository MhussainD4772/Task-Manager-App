interface TaskFilterProps {
  filter: string;
  onFilterChange: (category: string) => void;
}

function TaskFilter({ filter, onFilterChange }: TaskFilterProps) {
  return (
    <div className="card card-enhanced mt-4">
      <div className="card-header">
        <i className="bi bi-funnel me-2"></i>
        Filter Tasks
      </div>
      <div className="card-body p-4">
        <select
          className="form-select form-select-enhanced"
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="All">📋 All Tasks</option>
          <option value="Work">💼 Work</option>
          <option value="Study">📚 Study</option>
          <option value="Personal">👤 Personal</option>
          <option value="Fitness">💪 Fitness</option>
        </select>
      </div>
    </div>
  );
}

export default TaskFilter;
