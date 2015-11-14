'use strict';

require('whatwg-fetch');

import React from 'react'
import { render } from 'react-dom'
import InfoBox from '../components/Info/InfoBox'
import CommentBox from '../components/CommentBox/comment-box'
import ListBox from '../components/List/ListBox'
import AdvBox from '../components/Adv/AdvBox'

render(
    <InfoBox url='/api/info'/>, document.querySelector('#info')
);

render(
    <ListBox url='/api/list'/>, document.querySelector('#img-list')
);

render(
    <CommentBox url='/api/comments' pollInterval={2000}/>, document.querySelector('#comment-box')
);

render(
    <AdvBox url='api/adv' />, document.querySelector('#adv')
);