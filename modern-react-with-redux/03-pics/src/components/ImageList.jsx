import React from 'react';

function ImageList(props) {
  const imageElements = props.images.map(({ id, description, urls }) => (
    <img key={id} src={urls.small} alt={description} />
  ));

  return <div>{imageElements}</div>;
}

export default ImageList;
