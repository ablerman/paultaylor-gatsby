import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    panel: {
        breakInside: 'avoid',
        fontSize: 0,
        // margin: '2px'
        [theme.breakpoints.up('md')]: {
            gridColumnStart: 'auto',
            gridRowStart: 'auto',
            // gridColumnEnd: 'span 6',
        },

    },
    content: {
        // padding: '2px',
        // borderRadius: '10px',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
    }
});

const MasonryPanel = props => {
    const style = {
        gridRowEnd: props.rowSpan,
        gridColumnEnd: props.colSpan,
    }
    return (
        <div className={props.classes.panel} style={style}>
            <div className={props.classes.content}>{props.children}</div>
        </div>
    );
};

MasonryPanel.defaultProps = {
    rowSpan: 'auto',
    colSpan: 'auto',
};

MasonryPanel.propTypes = {
    rowSpan: PropTypes.string,
    colSpan: PropTypes.string,
};

export default withStyles(styles)(MasonryPanel);
