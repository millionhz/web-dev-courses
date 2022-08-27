import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  search = (term) => {
    this.setState({ term });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.search} />
        <h1>{this.state.term}</h1>
      </div>
    );
  }
}

export default App;
