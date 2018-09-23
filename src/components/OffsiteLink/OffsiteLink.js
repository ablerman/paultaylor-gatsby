import React from 'react';
import PropTypes from 'prop-types';

const OffsiteLink = (props) => {
    return (
        <a {...props} href={props.to}>
            {props.children}
        </a>
    )
};


OffsiteLink.defaultProps = {};

OffsiteLink.propTypes = {};

export default OffsiteLink;
