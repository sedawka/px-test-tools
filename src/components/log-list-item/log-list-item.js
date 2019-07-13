import React from 'react';

const LogListItem = ({ causedBy, text }) => {
    return (
            <div>
                <span> {causedBy} </span>
                <span> {text} </span>
            </div>
    )
};

export default LogListItem;