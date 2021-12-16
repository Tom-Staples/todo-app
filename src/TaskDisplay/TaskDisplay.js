import React from 'react';

const TaskDisplay = props => {
  const displayArray = props.taskList.map((task, index) => {
    if (
      !props.searchTask ||
      task.toLowerCase().indexOf(props.searchTask.toLowerCase()) !== -1
    ) {
      return (
        <li key={index} className='task'>
          <span>{task}</span>
          <button
            className='buttons taskClose'
            onClick={props.handleRemoveTask}
          >
            X
          </button>
        </li>
      );
    }
    return null;
  });
  return (
    <ul
      style={{
        marginTop: '75px',
        padding: '0px'
      }}
    >
      {displayArray}
    </ul>
  );
};

export default TaskDisplay;
