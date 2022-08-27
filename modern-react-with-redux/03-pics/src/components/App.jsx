import React from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList/ImageList';
import SearchBar from './SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  getImagesByTerm = async (term) => {
    const res = await unsplash.get('/search/photos', {
      params: {
        query: term,
      },
    });

    this.setState({
      images: res.data.results,
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.getImagesByTerm} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
