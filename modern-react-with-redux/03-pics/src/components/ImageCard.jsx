import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.state = {
      spans: 0,
    };
  }

  handleLoad = () => {
    const height = this.imgRef.current.clientHeight;
    this.setState({ spans: Math.ceil(height / 10 + 1) });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          style={{ width: '250px' }}
          ref={this.imgRef}
          src={urls.regular}
          alt={description}
          onLoad={this.handleLoad}
        />
      </div>
    );
  }
}

export default ImageCard;
