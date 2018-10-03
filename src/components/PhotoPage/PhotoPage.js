import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MasonryContainer, MasonryPanel } from '../../components/Masonry';
import Photo from '../../components/Photo';

const styles = theme => ({
    photoPage: {
        height:'100vh',
        overflowY: 'auto',
    },
    backToTopBtn: {
        cursor: 'pointer',
            width: '100%',
            padding:'20px 0',
            textAlign: 'center',
            '&:hover': {
            backgroundColor: 'darkgray',
        }
    }
})

class PhotoPage extends React.Component {
    ref = React.createRef()

    goToTop = () => {
        this.ref.current.scrollTop = 0;
    }


    render() {
        const classes = this.props.classes;
        return (
            <div
                className={classes.photoPage}
                ref={this.ref}
            >
                <MasonryContainer>
                    {this.props.photos.map(photo => (
                        <MasonryPanel
                            key={photo.alt}
                            colSpan={photo.colSpan ? `span ${photo.colSpan}` : 'span 6'}
                            rowSpan={photo.rowSpan ? `span ${photo.rowSpan}` : 'auto'}
                        >
                            <Photo {...photo} />
                        </MasonryPanel>
                    ))}
                </MasonryContainer>
                <div
                    className={classes.backToTopBtn}
                    onClick={this.goToTop}
                >
                    <h2 style={{ display: 'block', }}>back to top</h2>
                </div>
            </div>
        );
    }
};

PhotoPage.defaultProps = {
    title: ''
};

PhotoPage.propTypes = {
    photos: PropTypes.array,
    title: PropTypes.string
};

export default withStyles(styles)(PhotoPage);
