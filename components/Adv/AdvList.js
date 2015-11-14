'use strict';

import React, { PropTypes } from 'react'
import AdvItem from './AdvItem'

const AdvList = (props) => {
    const ListNodes = props.data.map((item, i) => {
        return (
            <AdvItem title={item.title} href={item.href} img={item.img} key={i}></AdvItem>
        )
    });

    return (
        <div className='row'>
            {ListNodes}
        </div>
    )
};

AdvList.propTypes = {
    data: PropTypes.array.isRequired
};

export default AdvList