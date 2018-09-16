import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Left from '@material-ui/icons/ChevronLeft';
import Right from '@material-ui/icons/ChevronRight';

const HEIGHT = '120px';
const EDGE_DISTANCE = '10px';

const styles = {
    arrow: {
        border: '0px',
        opacity: 0.7,
        position: 'absolute',
        margin: 0,
        padding: 0,
        transition: 'all 1s',
        '&:hover':{
            opacity: 1
        }
    },
    foreIcon: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    backIcon: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        transform: 'scale(1.5)',
        filter: 'blur(5px)',
    },
}

const Arrow = (props) => {
    const style = {
        height: `${props.height}`,
        width: `${props.height}`,
    }

    return (
        <div className={props.classes.arrow} style={style}>
            <div style={{display: props.direction === Arrow.LEFT ? 'block' : 'none'}}>
                <Left nativeColor={props.shadowColor} className={props.classes.backIcon}/>
                <Left nativeColor={props.color} className={props.classes.foreIcon}/>
            </div>

            <div style={{display: props.direction === Arrow.RIGHT ? 'block' : 'none'}}>
                <Right nativeColor={props.shadowColor} className={props.classes.backIcon}/>
                <Right nativeColor={props.color} className={props.classes.foreIcon}/>
            </div>
        </div>
    );
};

Arrow.LEFT = 'left';
Arrow.RIGHT = 'right';


Arrow.defaultProps = {
    color: 'rgba(0, 0, 0, 0)',
    shadowColor: 'rgba(255, 255, 255 ,1)',
    direction: Arrow.LEFT,
    height: HEIGHT,
    edgeDistance: EDGE_DISTANCE,
};

Arrow.propTypes = {
    color: PropTypes.string,
    shadowColor: PropTypes.string,
    direction: PropTypes.string,
    height: PropTypes.string,
    edgeDistance: PropTypes.string,
};

export default withStyles(styles)(Arrow);
