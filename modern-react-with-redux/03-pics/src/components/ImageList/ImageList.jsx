import React from 'react';
import './ImageList.css';
import ImageCard from '../ImageCard';

function ImageList(props) {
  const imageElements = props.images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));

  return <div className="image-list">{imageElements}</div>;
}

export default ImageList;
