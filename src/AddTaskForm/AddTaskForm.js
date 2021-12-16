import React, { useState } from 'react';

const AddTaskForm = props => {
  const [task, setTask] = useState('');

  const handleChange = e => {
    setTask(e.target.value);
  };
  return (
    <form
      className='flexCenter'
      onSubmit={e => {
        props.handleSubmit(e, task);
        setTask('');
      }}
      style={{ marginBottom: '40px' }}
    >
      <input
        placeholder='Enter Task...'
        value={task}
        onChange={handleChange}
        style={{ borderRadius: '5px' }}
        className='searchBar'
      />
      <button className='buttons' disabled={task === ''}>
        Add
      </button>
    </form>
  );
};

export default AddTaskForm;
