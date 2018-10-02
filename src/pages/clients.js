import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {compose, map} from 'ramda'
import Layout from '../components/Layout'
import PhotoPage from '../components/PhotoPage/PhotoPage';
import logos from '../constants/clientLogos';



const styles = theme => ({
    root: {
        [theme.breakpoints.up('md')]: {
            marginLeft: '255px'
        }
    },
    img: {
        height:'auto',
        width: '120px',
    },
    gridContainer: {
        margin: '30px',
        padding: '30px',
        backgroundColor: 'white',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr,'
    },
    gridItem: {
    }
});

const clients = (props) => {
    const cells = map(item => (
        <div key={item.alt}>
            <img
                alt={item.alt}
                className={props.classes.img}
                src={`/${item.path}`}
            />
        </div>
    ), logos)

    return (
        <Layout location={props.location}>
            <div className={props.classes.gridContainer}>
                {cells}
            </div>
        </Layout>
    );
};


clients.defaultProps = {};

clients.propTypes = {};

export default withStyles(styles)(clients);
