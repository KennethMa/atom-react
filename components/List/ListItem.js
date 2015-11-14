'use strict';

import React, { PropTypes } from 'react'

const ListItem = (props) => {
    return (
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
            <div className="thumbnail">
                <a href={props.href}><img src={props.img} alt=""/></a>
                <div className="caption">
                    <p>{props.title}</p>
                    <span className="price">￥{props.price}</span>
                </div>
            </div>
        </div>
    )
};

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
};

export default ListItem