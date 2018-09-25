import React from 'react';

const OffsiteLink = (props) => {
    return (
        <a {...props} href={props.to}>
            {props.children}
        </a>
    )
};

export default OffsiteLink;
