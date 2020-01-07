import React from 'react';
import './Thumbnail.scss';

function Thumbnail(props) {

  const src = props.src

  return (
    <div className="thumbnail-container">
      <figure className="thumbnail-container__figure">
        <img
          className="thumbnail-container__thumbnail"
          src={src}
          alt={`img-`}
        />
      </figure>
    </div>
  )
}

export default Thumbnail;
