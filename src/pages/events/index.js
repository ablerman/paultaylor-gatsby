import React from 'react';
import { graphql } from "gatsby"
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ResponsiveDrawer from '../../components/ResponsiveDrawer/ResponseiveDrawer';
import Menu from '../../components/Menu/Menu';
import PhotoPage from '../../components/PhotoPage/PhotoPage';
import { filter, path, head, compose } from 'ramda';

import menu from '../../constants/menu';
import ResponsiveAppBar from '../../components/ResponsiveAppBar/ResponsiveAppBar';

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
                    <Menu />
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