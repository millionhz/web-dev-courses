import React from 'react';
import Spinner from './components/Spinner';
import SeasonDisplay from './components/SeasonDisplay/SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latitude: null, errorMessage: '' };
  }

  getMonth() {
    return new Date().getMonth();
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        this.setState({ latitude: data.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  render() {
    if (!this.state.latitude && !this.state.errorMessage) {
      return <Spinner message="Getting GeoLocation" />;
    }

    if (this.errorMessage) {
      return <h1>Error: {this.state.errorMessage}</h1>;
    }

    return (
      <SeasonDisplay latitude={this.state.latitude} month={this.getMonth()} />
    );
  }
}

export default App;
