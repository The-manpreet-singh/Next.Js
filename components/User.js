import React from 'react';

const user =(props) => (
    <div>
        <h1>{props.name}</h1>
        <p>Age: {props.age} </p>
    </div>
);

export default user;