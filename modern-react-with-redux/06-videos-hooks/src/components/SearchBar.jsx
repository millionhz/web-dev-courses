import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ placeholder, onSubmit }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(value);
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="search-bar">Video Search</label>
          <input
            name="search-bar"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  placeholder: 'Search',
};

export default SearchBar;
