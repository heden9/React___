import React from 'react';
import ReactDOM from 'react-dom'
import './Magnifier.css';
import PureRenderMixin from 'react-addons-pure-render-mixin';
class Touch extends React.Component{
    moveHandle(e){
        this.props.fun(e);
    }
    render(){
        return(
            <div className="touch">
                <img src={this.props.img} onMouseMove={this.moveHandle.bind(this)} style={{height:"150px",width:"110px"}}/>
            </div>
        )
    }
}
class View extends React.Component{
    render(){
        var x = -this.props.positionInfo[0].x / 110 * (this.props.positionInfo[1].width - 200),
            y = -this.props.positionInfo[0].y / 150 * (this.props.positionInfo[1].height - 200),
            style = {
            height: 200,
            width: 200,
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'url(' + this.props.img + ')',
            backgroundPosition: (x <= 0 ? x : 0) + "px " + (y >= -180 ? y : -180) + "px"
        };
        return(
            <div className="view" style={style}>

            </div>
        )
    }
}
class Magnifier extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
           Mposition: {
               x: 0,
               y: 0
           }
        };

    }
    offset(){
        return {
            x: 0,
            y: 0
        }
    }
    componentDidMount(){
        this.offset = {
            x: ReactDOM.findDOMNode(this.refs.Img).offsetLeft,
            y: ReactDOM.findDOMNode(this.refs.Img).offsetTop
        }
    }
    moveHandle(e){
        var Mouse = {
            x: e.pageX - this.offset.x,
            y: e.pageY - this.offset.y
        };
        this.setState({
            Mposition: Mouse
        });

    }
    render(){
        return(
            <div>
                <Touch img={this.props.img} ref="Img" fun={this.moveHandle.bind(this)}/>
                <View img={this.props.img} positionInfo={[this.state.Mposition,this.props.size]}/>
            </div>
        )
    }
}

export default Magnifier;