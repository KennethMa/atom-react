'use strict'

import './adv.css'
import React, { Component, PropTypes } from 'react'
import AdvList from './AdvList'

export default class AdvBox extends Component {
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
            <div>
                <h5>相关集合</h5>
                <AdvList data={this.state.data}/>
            </div>
        )
    }
}

AdvBox.propTypes = {
    url: PropTypes.string.isRequired
};