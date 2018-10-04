import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../withRoot';
import {compose} from 'ramda'
import { withPrefix } from 'gatsby'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Mail from '@material-ui/icons/MailOutlined'
import {Instagram, Tumblr} from '../../components/Icons'
import Typography from '@material-ui/core/Typography';
import Menu from '../../components/Menu'
import ResponsiveDrawer from '../../components/ResponsiveDrawer'
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import OffsiteLink from '../../components/OffsiteLink'

const styles = theme => ({
    root: {
        [theme.breakpoints.up('md')]: {
            position:'relative',
            left: '255px',
            width: 'calc(100vw - 255px)',
        }
    },
    drawer: {
        paddingTop: '20px',
    },
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
        const headlineStyle = {
            color: 'black',
            textAlign: 'center',
            marginBottom: 0,
        }
        const iconStyle = {
            fill: 'black'
        }
        return (
            <React.Fragment>
                <ResponsiveDrawer
                    open={this.state.drawerOpen}
                    onClose={this.onClose}
                >
                    <div className={this.props.classes.drawer}>
                        <a href={withPrefix("/")} style={{textDecoration: 'none'}}>
                            <h1 style={headlineStyle}>
                                Paul Taylor
                            </h1>
                        </a>
                        <div style={{display:'flex', justifyContent: 'center'}}>
                            <IconButton component={OffsiteLink} to="https://www.instagram.com/thisispaultaylor">
                                <Instagram style={iconStyle}/>
                            </IconButton>
                            <IconButton component={OffsiteLink} to="https://thisispaultaylor.instagram.com">
                                <Tumblr style={iconStyle}/>
                            </IconButton>
                            <IconButton component={OffsiteLink} to="mailto://hello@thisispayltaylor.com">
                                <Mail style={iconStyle}/>
                            </IconButton>
                        </div>
                    </div>
                    <Menu
                        onMenuClick={() => this.onClose()}
                        location={this.props.location}
                    />
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

Layout.propTypes = {
    location: PropTypes.object,
    children: PropTypes.any,
};

export default compose(
    withRoot,
    withStyles(styles)
)(Layout)
// export default withRoot(withStyles(styles)(Layout));
