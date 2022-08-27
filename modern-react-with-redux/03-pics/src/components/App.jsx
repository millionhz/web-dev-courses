import React from 'react';
import unsplash from '../api/unsplash';
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

    const images = res.data.results.map((image) => ({
      url: image.urls.small,
      id: image.id,
    }));

    this.setState({
      images,
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.getImagesByTerm} />
        <ul>
          {this.state.images.map((image) => (
            <li key={image.id}>{image.url}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
