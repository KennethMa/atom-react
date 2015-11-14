'use strict';

import './info.css'
import React, { Component, PropTypes } from 'react'
import Info from './Info'

export default class InfoBox extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []}
    }

    componentDidMount() {
        fetch(this.props.url)
            .then(response => response.json())
            .then(data => this.setState({data: data}))
            .catch(err => console.error(this.props.url, err.toString()))
    }

    render() {
        return (
            <div className='info-box'>
                <Info data={this.state.data}/>
            </div>
        )
    }
}

InfoBox.propTypes = {
    url: PropTypes.string.isRequired
};