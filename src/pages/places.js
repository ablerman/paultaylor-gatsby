import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ResponsiveDrawer from '../components/ResponsiveDrawer/ResponseiveDrawer';
import Menu from '../components/Menu/Menu';
import PhotoPage from '../components/PhotoPage/PhotoPage';

import photos from '../constants/placesPhotos';
import ResponsiveAppBar from '../components/ResponsiveAppBar/ResponsiveAppBar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import MenuIcon from '@material-ui/core/SvgIcon/SvgIcon';
import Typography from '@material-ui/core/Typography/Typography';

const styles = theme => ({
    root: {
        [theme.breakpoints.up('md')]: {
            marginLeft: '255px'
        }
    }
});

class Street extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <ResponsiveDrawer
                    open={this.state.drawerOpen}
                    onClose={this.onClose}
                >
                    <Menu onMenuClick={() => this.onClose()} />
                </ResponsiveDrawer>
                <div>
                    <ResponsiveAppBar onOpen={this.onOpen}>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <MenuIcon />
                            <Typography variant="title" color="inherit">
                                PaulTaylor
                            </Typography>
                        </IconButton>
                    </ResponsiveAppBar>
                    <div className={this.props.classes.root}>
                        <PhotoPage title="Places" photos={photos} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Street);

