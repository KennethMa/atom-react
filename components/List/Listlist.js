'use strict'

import React, { PropTypes } from 'react'
import ListItem from './ListItem'

const Listlist = (props) => {
    const ListNodes = props.data.map((item, i) => {
        return (
            <ListItem title={item.title} href={item.href} img={item.img} price={item.price} key={i}></ListItem>
        )
    });

    return (
        <div className='row'>
            {ListNodes}
        </div>
    )
};

Listlist.propTypes = {
    data: PropTypes.array.isRequired
};

export default Listlist