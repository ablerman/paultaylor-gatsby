import React from "react";
import {MasonryContainer, MasonryPanel} from 'components/Masonry';
import Photo from 'components/Photo'

const PhotoPage = (props) => {
  return (
    <MasonryContainer>
      <MasonryPanel>
        <h1>{props.title}</h1>
      </MasonryPanel>
      {props.photos.map( photo => (
        <MasonryPanel key={photo.alt}>
          <Photo  {...photo} />
        </MasonryPanel>
      ))}
    </MasonryContainer>
  );
};


PhotoPage.defaultProps = {};

PhotoPage.propTypes = {};

export default PhotoPage;
