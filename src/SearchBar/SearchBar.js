import React from 'react';
import { useState } from 'react/cjs/react.development';

const SearchBar = props => {
  const [search, setSearch] = useState('');
  const handleChange = e => {
    setSearch(e.target.value);
  };
  return (
    <form className='flexCenter'>
      <input
        placeholder='Search Tasks...'
        value={search}
        onChange={e => {
          handleChange(e);
          props.handleTaskSearch(e);
        }}
        style={{ borderRadius: '5px', padding: '10px', marginBottom: '75px' }}
        className='searchBar'
      />
    </form>
  );
};

export default SearchBar;
