import React from 'react'

const SingleTask = ({
  id,
  validId,
  content,
  complete,
  labelClick,
  deleteTask,
  updateStatus
}) => {
  // generating an aria-label value
  const ariaLabelValue = `Delete the task "${content}"`

  // check the checkbox and toggle the ['completed'] property
  const handleLabelClick = (event) => {
    const adjacentCheckbox = event.target.parentNode.childNodes[0]
    labelClick(adjacentCheckbox)
  };

  const handleDeleteClick = (event) => {
    deleteTask(id)
  };

  // toggle the ['completed'] property
  const handleCheckboxChange = (event) => {
    updateStatus(id)
  };

  return (
    <li className="single-task">

      {/* drag and drop events are attached to inputs */}
      <input
        type="checkbox"
        className="task-checkbox"
        id={validId}
        onChange={handleCheckboxChange}
        checked={complete}
      />

      <label
        htmlFor={validId}
        onClick={handleLabelClick}>
        {content}
      </label>

      <button
        aria-label={ariaLabelValue}
        type="button"
        className="delete-task"
        onClick={handleDeleteClick}>
      </button>
    </li>
  )
};

export default SingleTask