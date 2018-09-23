import React from 'react';
import Typography from '@material-ui/core/Typography';

const NotFoundPage = () => (
    <React.Fragment>
        <Typography variant="display2" gutterBottom>
            NOT FOUND
        </Typography>
        <Typography>
            You just hit a route that doesn&#39;t exist... the sadness.
        </Typography>
    </React.Fragment>
);

export default NotFoundPage;
