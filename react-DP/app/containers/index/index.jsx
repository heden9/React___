import React from 'react';
import '../../static/css/common.less';
import PureRenderMixin from 'react-addons-pure-render-mixin';
class Hello extends React.Component {
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            now: [1,2,3,4,5]
        }
    }
    clickHandle(){
        this.setState({
            now: this.state.now.concat([6])
        });
    }
    render() {
        console.log("页面正在渲染！");
        return (
            <div>
                <ul className="hello">
                    {this.state.now.map(function(item, index){
                            return <li key={index} onClick={this.clickHandle.bind(this)}>{item}</li>
                    }.bind(this))}
                </ul>
            </div>

            )
    }
}

export default Hello;