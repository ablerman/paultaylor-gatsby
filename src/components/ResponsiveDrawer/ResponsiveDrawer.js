import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

const styles = {
    root: {}
};

const ResponsiveDrawer = props => {
    const { classes, theme } = props;

    return (
        <div className={classes.root}>
            <Hidden mdUp>
                <Drawer
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={props.open}
                    onClose={props.onClose}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                >
                    {props.children}
                </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
                <Drawer
                    variant="permanent"
                    open
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    {props.children}
                </Drawer>
            </Hidden>
        </div>
    );
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
