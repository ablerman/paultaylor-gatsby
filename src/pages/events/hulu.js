import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveDrawer from '../../components/ResponsiveDrawer/ResponseiveDrawer';
import Menu from '../../components/Menu/Menu';

import PhotoPage from '../../components/PhotoPage/PhotoPage';
import photos from '../../constants/huluPhotos'


const amazon = (props) => {
    return (
        <div style={{marginLeft:'255px'}}>
            <ResponsiveDrawer>
                <Menu/>
            </ResponsiveDrawer>
            <PhotoPage title="Hulu" photos={photos}/>
        </div>
    );
};


amazon.defaultProps = {};

amazon.propTypes = {};

export default amazon;
