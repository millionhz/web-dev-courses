import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.value}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
