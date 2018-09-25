import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { parse } from 'query-string';
import { navigate } from "gatsby"
import {pathOr} from 'ramda'

import Layout from '../../components/Layout'
import PhotoPage from '../../components/PhotoPage';
import Carousel from '../../components/Carousel';

import photos from '../../constants/amazonPhotos';

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
            console.log('carousel')
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
                    title="Amazon Alexa // Smartlife Roadshow"
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
