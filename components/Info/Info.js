'use strict';

import React, { Component, PropTypes } from 'react'

const Info = (props) => {
    const InfoNodes = props.data.map((info, i) => {
        return (
            <div key={i}>
                <div className="img-header">
                    <img src={info.imgHeader} className="img-responsive" alt=""/>
                </div>
                <div className="intro">
                    <h4>{info.title}</h4>

                    <div className="row">
                        <div id="quanzi" className="col-lg-6 col-md-6 col-sm-6 tar">
                            圈子：
                            <img className="img-circle" src={info.quanziImg} alt="" width="20px" height="20px"/>
                            <span>{info.quanziName}</span>
                        </div>
                        <div id="quanzhu" className="col-lg-6 col-md-6 col-sm-6 tal bl">
                            圈主：
                            <img className="img-circle" src={info.quanzhuImg} alt="" width="20px" height="20px"/>
                            <span>{info.quanzhuName}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div id="words" className="col-lg-12 col-md-12 col-sm-12">
                            <p>{info.description}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 tar">
                            <i className="glyphicon glyphicon-fire" style={{"color": "#ff7200"}}></i>&nbsp;{info.fire}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 tal bl">
                            <i className="glyphicon glyphicon-comment"
                               style={{"color": "#bdc7d4"}}></i>&nbsp;{info.comment}
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            {InfoNodes}
        </div>
    )
};

Info.propTypes = {
    data: PropTypes.array.isRequired
}

export default  Info