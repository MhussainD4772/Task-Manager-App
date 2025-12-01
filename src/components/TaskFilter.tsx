interface TaskFilterProps {
  filter: string;
  onFilterChange: (category: string) => void;
}

function TaskFilter({ filter, onFilterChange }: TaskFilterProps) {
  return (
    <div className="card p-3 mt-3">
      <h5>Filter Tasks</h5>

      <select
        className="form-select"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="All">All Tasks</option>
        <option value="Work">Work</option>
        <option value="Study">Study</option>
        <option value="Personal">Personal</option>
        <option value="Fitness">Fitness</option>
      </select>
    </div>
  );
}

export default TaskFilter;
