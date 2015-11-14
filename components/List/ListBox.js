'use strict'

import './list.css'
import React, { Component, PropTypes } from 'react'
import Listlist from './Listlist'

export default class ListBox extends Component {
    constructor(props) {
        super(props)
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
            <div className='img-list'>
                <Listlist data={this.state.data}/>
            </div>
        )
    }
}

ListBox.propTypes = {
    url: PropTypes.string.isRequired
}