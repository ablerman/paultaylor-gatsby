import React from 'react';
import PropTypes from 'prop-types';
import { MasonryContainer, MasonryPanel } from '../../components/Masonry';
import Photo from '../../components/Photo';

const PhotoPage = props => {
    return (
        <MasonryContainer>
            {/*{*/}
                {/*props.title.length > 0 &&*/}
                {/*(*/}
                    {/*<MasonryPanel>*/}
                        {/*<h1 style={{textAlign: 'center'}}>{props.title}</h1>*/}
                    {/*</MasonryPanel>*/}

                {/*)*/}
            {/*}*/}
            {props.photos.map(photo => (
                <MasonryPanel key={photo.alt}>
                    <Photo {...photo} />
                </MasonryPanel>
            ))}
        </MasonryContainer>
    );
};

PhotoPage.defaultProps = {
    title: ''
};

PhotoPage.propTypes = {
    photos: PropTypes.array,
    title: PropTypes.string
};

export default PhotoPage;
