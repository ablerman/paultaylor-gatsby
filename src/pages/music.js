import React from 'react';
import ResponsiveDrawer from '../components/ResponsiveDrawer/ResponseiveDrawer';
import Menu from '../components/Menu/Menu';
import PhotoPage from '../components/PhotoPage/PhotoPage';

import photos from '../constants/musicPhotos';

class Music extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div style={{ marginLeft: '255px' }}>
                <ResponsiveDrawer>
                    <Menu />
                </ResponsiveDrawer>
                <PhotoPage title="Music" photos={photos} />
            </div>
        );
    }
}

export default Music;
