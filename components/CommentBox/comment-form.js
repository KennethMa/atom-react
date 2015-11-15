'use strict'

import React, { Component, PropTypes } from 'react'

export default class CommentForm extends Component {

    componentDidMount() {
        /*const input = document.querySelector('#input-comment');
        input.addEventListener("focus", focusFunc, true);
        input.addEventListener("blur", blurFunc, true);
        function focusFunc() {
            document.querySelector("#input").style.width = "90%";
            document.querySelector("#post").style.display = "inline-block";
        }

        function blurFunc() {
            document.querySelector("#input").style.width = "100%";
            document.querySelector("#post").style.display = "none";
        }*/
    }

    handleSubmit(e) {
        e.preventDefault();
        const author = "mzx";
        const img = '//1251349835.cdn.myqcloud.com/1251349835/headimg/userhead.jpg';
        const text = this.refs.text.value.trim();
        const date = new Date();
        const time = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

        if (!text || !author) {
            return
        }

        this.props.onCommentSubmit({author: author, text: text, time: time, img: img})
        this.refs.text.value = '';
        return
    }

    render() {
        return (
            <div id="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                <form className="form-inline">
                    <div id="input" className="form-group">
                        <input id="input-comment" type="text" className="form-control " placeholder="添加评论..."
                               ref="text"/>
                    </div>
                    <button id="post" type="submit" value="Post" className="btn btn-default">发送</button>
                </form>
            </div>
        )
    }
}

CommentForm.propTypes = {
    onCommentSubmit: PropTypes.func.isRequired
}