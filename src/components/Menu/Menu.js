import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {pathOr} from 'ramda'
import { withPrefix } from 'gatsby'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';
import classnames from 'classnames'

import menu from '../../constants/menu';

const styles = theme => ({
    root: {
        fontFamily: 'Abel, sans-serif',
    },
    list: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    listItem: {
      padding: '0 24px',
    },
    active: {
        fontWeight: 'bolder'
    },
    link: {
        minHeight: 0,
        padding: '0 16px',
    }
});


const Menu = props => {
    const onButtonClick = () => {
        if(props.onMenuClick) {
            props.onMenuClick();
        }
    };

    const generateList = children => {
        const listClasses = [props.classes.root, props.classes.list]

        if (children.length) {
            return (
                <List dense={true} disablePadding={true} className={listClasses.join(' ')}>
                    {children.map(child => {
                        const pathname = pathOr(null, ['location', 'pathname'], props);
                        const location = `${child.location}/index.html`

                        const linkClasses = classnames(
                            props.classes.link,
                            props.classes.root,
                            {
                                [props.classes.active]: withPrefix(pathname) === location
                            }
                        )

                        return (
                            <ListItem key={child.name} className={props.classes.listItem}>
                                <ListItemText>
                                    <Button
                                        component={Link}
                                        to={`${child.location}/index.html`}
                                        onClick={onButtonClick}
                                        className={linkClasses}
                                    >
                                        {child.name}
                                    </Button>
                                </ListItemText>
                            </ListItem>
                        )
                    })}
                </List>
            );
        }
    };

    const generateHeading = item => {
        const pathname = pathOr(null, ['location', 'pathname'], props);
        const location = `${item.location}/index.html`

        const classes = classnames(
            props.classes.link,
            props.classes.root,
            {
                [props.classes.active]: withPrefix(pathname) === location
            }
        )

        return (
            <React.Fragment key={item.name}>
                <Typography>
                    <Button
                        component={Link}
                        to={`${item.location}/index.html`}
                        onClick={onButtonClick}
                        className={classes}
                    >
                        {item.name}
                    </Button>
                </Typography>
                {generateList(item.children)}
            </React.Fragment>
        )
    };

    return <div>{menu.map(item => generateHeading(item))}</div>;
};

Menu.defaultProps = {};

Menu.propTypes = {
    onMenuClick: PropTypes.func
};

export default withStyles(styles)(Menu);
