'use strict'

import React, { PropTypes } from 'react'

const Comment = (props) => {
    const str = props.children.toString();
    return (
        <div className="comment-item tal">
            <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-2">
                    <img className="img-circle" width="35px" height="35px" src={props.img} alt=""/>
                </div>
                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-10">
                    <span className="name">{props.author}</span>
                    <span className="time pull-right">{props.time}</span>

                    <p className="comment-content" dangerouslySetInnerHTML={{__html: str}}></p>
                </div>
            </div>
        </div>
    )
}

Comment.propTypes = {
    author: PropTypes.string.isRequired,
    children: PropTypes.string
}

export default Comment