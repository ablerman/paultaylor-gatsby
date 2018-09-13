import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        [theme.breakpoints.up('md')]: {
            marginLeft: '255px'
        }
    }
});

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            drawerOpen: false,
        };
    }

    onOpen = () => {
        this.setState({ drawerOpen: true });
    };

    onClose = () => {
        this.setState({ drawerOpen: false });
    };

    renderContent = () => {
        if (this.props.photos !== undefined) {
            return (
                <Carousel
                    photos={this.props.photos}
                    currentPhoto={this.props.image}
                />
            );
        } else {
            return (
                <PhotoPage
                    title={this.props.children}
                    photos={this.props.photos}
                />
            );
        }
    };

    render() {
        return (
            <React.Fragment>
                <ResponsiveDrawer
                    open={this.state.drawerOpen}
                    onClose={this.onClose}
                >
                    <Menu onMenuClick={() => this.onClose()}/>
                </ResponsiveDrawer>
                <div>
                    <ResponsiveAppBar onOpen={this.onOpen}>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <MenuIcon/>
                            <Typography variant="title" color="inherit">
                                PaulTaylor
                            </Typography>
                        </IconButton>
                    </ResponsiveAppBar>
                    <div className={this.props.classes.root}>
                        {this.renderContent()}
                    </div>
                </div>
            </React.Fragment>
        );
    }
};


Layout.defaultProps = {};

Layout.propTypes = {};

export default withStyles(styles)(Layout);
