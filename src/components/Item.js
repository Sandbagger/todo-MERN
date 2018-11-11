import React from 'react';

const Item = (props) => (
    <li
        onClick={() => props.onClick(props.completed)}>
        {props.name}
    </li>
);

export default Item;