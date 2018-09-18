import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
    },
    active : {
        fontWeight: 'bolder'
    },
});


const Menu = props => {
    const onButtonClick = () => {
        props.onMenuClick();
    };

    const generateList = children => {
        if (children.length) {
            return (
                <List dense={true}>
                    {children.map(child => {
                        const pathname = props.location.pathname;
                        const location = `${child.location}/index.html`
                        const classes = classnames(
                            props.classes.root,
                            {
                                [props.classes.active]: pathname === location,
                            }
                        )
                        return (
                            <ListItem key={child.name} >
                                <ListItemText>
                                    <Button
                                        component={Link}
                                        to={`${child.location}/index.html`}
                                        onClick={onButtonClick}
                                        className={classes}
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
        const pathname = props.location.pathname;
        const location = `${item.location}/index.html`

        const classes = classnames(
            props.classes.root,
            {
                [props.classes.active]: pathname === location
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
