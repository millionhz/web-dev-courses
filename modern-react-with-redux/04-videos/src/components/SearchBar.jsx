import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { onSubmit } = this.props;
    const { value } = this.state;

    onSubmit(value);
  };

  render() {
    const { value } = this.state;
    const { placeholder } = this.props;

    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="search-bar">Video Search</label>
            <input
              name="search-bar"
              type="text"
              placeholder={placeholder ?? 'Search'}
              value={value}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
};

export default SearchBar;
