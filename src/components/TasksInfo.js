import React from "react";
import TasksFilter from "./TasksFilter";

const TasksInfo = ({ tasks, clearCompleted, filter, updateFilter }) => {
	const checkedTasks = tasks.filter((e) => e.complete === false).length;

	const handleClearCompleted = (event) => {
		event.preventDefault();
		clearCompleted();
	};

	return (
		<div className="tasks-state">
			<div className="tasks-info">
				<p className="tasks-count">{checkedTasks} items left</p>

				<button
					form="delete-checked-tasks-form"
					type="submit"
					className="clear-tasks"
					onClick={handleClearCompleted}
				>
					Clear Completed
				</button>
			</div>
			<TasksFilter tasks={tasks} filter={filter} updateFilter={updateFilter} />
		</div>
	);
};

export default TasksInfo;
