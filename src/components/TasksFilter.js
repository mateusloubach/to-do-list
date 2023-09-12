import React from "react";

const TasksFilter = ({
  tasks,
  filter,
  updateFilter
}) => {

  const handleFilterTasks = (event) => {
    const filterName = event.target.name
    updateFilter(filterName)
  }

  return (
    <div className="tasks-filter">
      <button
        onClick={handleFilterTasks}
        name="all"
        type="button"
        className={filter === "all" ? "filter-applied" : ""}
      >
        All
      </button>

      <button
        onClick={handleFilterTasks}
        name="active"
        type="button"
        className={filter === "active" ? "filter-applied" : ""}
      >
        Active
      </button>

      <button
        onClick={handleFilterTasks}
        name="completed"
        type="button"
        className={filter === "completed" ? "filter-applied" : ""}
      >
        Completed
      </button>
    </div>
  )
};

export default TasksFilter