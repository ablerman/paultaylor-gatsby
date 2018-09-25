import React from 'react';
import { graphql } from "gatsby"
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Mail from '@material-ui/icons/MailOutlined'
import { withPrefix } from 'gatsby'
import {Instagram, Tumblr} from '../../components/Icons'
import { withStyles } from '@material-ui/core/styles';
import ResponsiveDrawer from '../../components/ResponsiveDrawer/ResponseiveDrawer';
import Menu from '../../components/Menu/Menu';
import PhotoPage from '../../components/PhotoPage/PhotoPage';
import { filter, path, head, compose } from 'ramda';

import menu from '../../constants/menu';
import ResponsiveAppBar from '../../components/ResponsiveAppBar/ResponsiveAppBar';
import OffsiteLink from '../../components/OffsiteLink';

const styles = theme => ({
    root: {
        [theme.breakpoints.up('md')]: {
            marginLeft: '255px'
        }
    }
});

class events extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            drawerOpen: false
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

        const { classes } = this.props;
        const photos = compose(
            path(['photos']),
            head,
            filter(item => item.name === 'events')
        )(menu);
        return (
            <div>
                <ResponsiveDrawer
                    open={this.state.drawerOpen}
                    onClose={this.onClose}
                >
                    <div>
                        <a href={withPrefix('/')} style={{textDecoration: 'none'}}>
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
                    <Menu location={this.props.location}/>
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
                        <PhotoPage title="Events" photos={photos} />
                    </div>
                </div>
            </div>
        );
    }
}

events.defaultProps = {};

events.propTypes = {};

export default withStyles(styles)(events);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`