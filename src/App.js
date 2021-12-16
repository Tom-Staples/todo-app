import React, { useState } from 'react';
import DateDisplay from './DateDisplay/DateDisplay';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import TaskDisplay from './TaskDisplay/TaskDisplay';
import SearchBar from './SearchBar/SearchBar';

const App = () => {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [searchTask, setSearchTask] = useState('');
  const [taskList, setTaskList] = useState('');

  //Mimics a load State as if a request has been made for a specific task
  const [searching, setSearching] = useState(false);

  //Controls whether the task form is to be shown or not
  const handleClick = () => {
    setShowTaskForm(!showTaskForm);
  };

  //Adds a new task to the list
  const handleSubmit = (e, task) => {
    e.preventDefault();
    setTaskList([...taskList, task]);
  };

  //Takes the value from the search bar to find a specific task
  const handleTaskSearch = e => {
    setSearching(true);
    setTimeout(() => setSearching(false), 2000);
    setSearchTask(e.target.value);
  };

  //Removes a task from the list when it has been completed
  const handleRemoveTask = e => {
    const task = e.target.previousElementSibling.innerHTML;
    const filteredtaskList = taskList.filter(value => {
      return value !== task;
    });
    setTaskList(filteredtaskList);
  };

  let loadStateDisplay;
  if (taskList && !searching) {
    loadStateDisplay = (
      <TaskDisplay
        taskList={taskList}
        searchTask={searchTask}
        handleRemoveTask={handleRemoveTask}
      />
    );
  }
  if (taskList && searching) {
    loadStateDisplay = (
      <div className='flexCenter'>
        <h3>Searching for Task...</h3>
        <div className='loader'></div>
      </div>
    );
  }
  if (!taskList || taskList.length === 0) {
    loadStateDisplay = null;
  }

  return (
    <div id='main'>
      <DateDisplay />
      <SearchBar handleTaskSearch={handleTaskSearch} />
      <h1 className='flexCenter' style={{ marginBottom: '75px' }}>
        Task List
      </h1>

      <div className='flexCenter'>
        <button className='buttons' onClick={handleClick}>
          {showTaskForm ? 'X' : '+'}
        </button>
      </div>
      <p className='flexCenter'>{showTaskForm ? 'Close Task' : 'Add Task'}</p>
      {showTaskForm && <AddTaskForm handleSubmit={handleSubmit} />}
      {loadStateDisplay}
    </div>
  );
};

export default App;
