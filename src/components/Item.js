import React from 'react';

const Item = (props) => (
    <li
        onClick={() => console.log('Toggle click', props._id)}>
        {props.name}
    </li>
);

export default Item;