'use strict';

import React, { PropTypes } from 'react'

const AdvItem = (props) => {
    return (
        <div className="col-lg-6 col-md-6 col-sm-6">
            <a href={props.href} className="thumbnail">
                <img src={props.img} alt={props.title}/>
            </a>
        </div>
    )
};

AdvItem.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
};

export default AdvItem