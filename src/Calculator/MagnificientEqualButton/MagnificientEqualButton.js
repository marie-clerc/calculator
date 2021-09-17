import React from 'react';

const magnificientEqualButton = (props) => {
    const classes = ['btn-equal'];
    if (typeof props !== 'undefined' && typeof props.type !== 'undefined')
        classes.push('btn--' + props.type);
    return (
        <button className={classes.join(' ')} onClick={props.onButtonPress}>
            {props.children}
        </button>
    );
}

export default magnificientEqualButton;