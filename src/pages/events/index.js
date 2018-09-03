import React from 'react';
import ResponsiveDrawer from '../../components/ResponsiveDrawer/ResponseiveDrawer';
import Menu from '../../components/Menu/Menu';
import PhotoPage from '../../components/PhotoPage/PhotoPage';
import {filter, path, head, compose} from 'ramda'

import menu from '../../constants/menu'

class events extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const photos = compose(
            path(['photos']),
            head,
            filter(item => item.name === 'events'),
        )(menu)
        return (
            <div style={{marginLeft:'255px'}}>
                <ResponsiveDrawer>
                    <Menu/>
                </ResponsiveDrawer>
                <PhotoPage title="Events" photos={photos}/>
            </div>
        );
    }
}

events.defaultProps = {};

events.propTypes = {};

export default events;
