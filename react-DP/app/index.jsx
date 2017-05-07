import React from 'react';
import { render } from 'react-dom';
import {hashHistory} from 'react-router';
import RouteMap from './router/routerMap.jsx'
import Perf from 'react-addons-perf';
if (__DEV__){
    window.Perf = Perf;
}


render(
    <RouteMap history={hashHistory}/>,
    document.getElementById('root')
)