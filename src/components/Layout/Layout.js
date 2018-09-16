import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Menu from '../../components/Menu'
import ResponsiveDrawer from '../../components/ResponsiveDrawer'
import ResponsiveAppBar from '../../components/ResponsiveAppBar';

const styles = theme => ({
    root: {
        [theme.breakpoints.up('md')]: {
            position:'relative',
            left: '255px',
            width: 'calc(100vw - 255px)',
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
                            className={this.props.classes.menuButton}
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
                        {this.props.children}
                    </div>
                </div>
            </React.Fragment>
        );
    }
};


Layout.defaultProps = {};

Layout.propTypes = {};

export default withStyles(styles)(Layout);
