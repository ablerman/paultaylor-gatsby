import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    section: {
        marginTop: theme.spacing.unit * 3
    },
    toolbar: {
        marginTop: theme.spacing.unit * 2
    },
    button: {
        marginRight: theme.spacing.unit
    }
});

const IndexPage = ({ classes }) => {
    console.log('index');

    return (
        <React.Fragment>
            <h1>Index</h1>
        </React.Fragment>
    );
};

export default withStyles(styles)(IndexPage);
