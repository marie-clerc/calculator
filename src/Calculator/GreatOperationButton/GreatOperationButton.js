import React from 'react';

const greatOperationButton = (props) => (
    <button className="btn">
        {props.children}
    </button>
);

export default greatOperationButton;