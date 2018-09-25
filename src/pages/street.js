import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { parse } from 'query-string';
import {pathOr} from 'ramda'
import { navigate } from "gatsby"
import Layout from '../components/Layout'
import PhotoPage from '../components/PhotoPage/PhotoPage';
import Carousel from '../components/Carousel';

import photos from '../constants/streetPhotos';

const styles = theme => ({
    root: {
        [theme.breakpoints.up('md')]: {
            marginLeft: '255px'
        }
    }
});

class Amazon extends React.Component {
    closeCarousel = () => {
        const pathname = pathOr(null, ['props', 'location', 'pathname'], this);
        navigate(pathname);
    }

    renderContent = () => {
        const queryParams = parse(this.props.location.search);
        if (queryParams.image !== undefined) {
            return (
                <Carousel
                    photos={photos}
                    currentPhoto={queryParams.image}
                    onClose={this.closeCarousel}
                    location={this.props.location}
                />
            );
        } else {
            return (
                <PhotoPage
                    title="Street"
                    photos={photos}
                />
            );
        }
    };

    render() {
        return (
            <Layout location={this.props.location}>
                {this.renderContent()}
            </Layout>
        )
    }
}

export default withStyles(styles)(Amazon);
