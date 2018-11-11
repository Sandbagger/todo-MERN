import React from 'react';

const Item = (props) => (
    <li>
        <span
        onClick={() => props.onClick(props.completed, props._id)}
        style={{textDecoration: props.completed ? 'line-through' : 'none'}}>
        {props.name}
        </span>
    </li>
);

export default Item;