import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { parse } from 'query-string';
import { navigate } from "gatsby"
import Layout from '../components/Layout'
import PhotoPage from '../components/PhotoPage/PhotoPage';
import Carousel from '../components/Carousel';

const photos = [
    {
        path: '/portfolio/events.jpg',
        alt: 'Events'
    },
    {
        path: '/portfolio/placescropped.jpg',
        alt: 'Places'
    },
    {
        path: '/portfolio/musiccropped.jpg',
        alt: 'music'
    },
    {
        path: '/portfolio/street.jpg',
        alt: 'Street'
    }
]

const styles = theme => ({
    root: {
        [theme.breakpoints.up('md')]: {
            marginLeft: '255px'
        }
    }
});

class Index extends React.Component {
    closeCarousel = () => {
        const pathname = this.props.location.pathname;
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
                <PhotoPage photos={photos} />
            );
        }
    };

    render() {
        return (
            <Layout location={this.props.location}>
                <PhotoPage photos={photos}/>
            </Layout>
        )
    }
}

export default withStyles(styles)(Index);
