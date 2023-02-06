import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';

function List(props) {

    const items = useSelector((state) => {return state.list})

    return (
        <ul>
            {items.map((item) =>
                <ListItem
                    key={item.id}
                    item={item}
                ></ListItem>)}
        </ul>
    )
    
}

export default List;