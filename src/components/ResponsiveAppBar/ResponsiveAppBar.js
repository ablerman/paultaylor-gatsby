import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        fontFamily: 'Abel, sans-serif',
        flex: {
            flexGrow: 1
        }
    },
    flex: { flexGrow: 1 },
    menuButton: {}
});


const ResponsiveAppBar = props => {
    return (
        <div className={props.classes.root}>
            <Hidden mdUp implementation="css">
                <AppBar position="static" color="default">
                    <Toolbar>
                        <IconButton
                            className={props.classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                            onClick={props.onOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="title"
                            color="inherit"
                            className={props.classes.flex}
                        >
                            Paul Taylor
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Hidden>
        </div>
    );
};

ResponsiveAppBar.defaultProps = {};

ResponsiveAppBar.propTypes = {};

export default withStyles(styles)(ResponsiveAppBar);
