import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    masonryContainer: {
        display: 'grid',
        columnGap: '10px',
        rowGap: '10px',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gridAutoRows: 'auto',

        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(12, 1fr)',
        },
    }
});

const MasonryContainer = props => {
    return (
        <div className={props.classes.masonryContainer}>
            {props.children}
        </div>
    );
};

MasonryContainer.defaultProps = {};

MasonryContainer.propTypes = {};

export default withStyles(styles)(MasonryContainer);
