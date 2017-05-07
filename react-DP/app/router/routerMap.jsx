import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from '../containers/App.jsx';
import Home from '../containers/index';
import NotFound from '../containers/NotFound';
import Cpp from '../containers/Console';
class RouteMap extends React.Component {
    UpdateHandle(){
        console.log("route更新了！");
    }
    render(){
        return(
            <Router history={this.props.history} onUpdate={this.UpdateHandle}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="console/:id" component={Cpp}/>
                    <Route path="404" component={NotFound}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouteMap;