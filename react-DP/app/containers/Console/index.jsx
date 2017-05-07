import React from 'react';
import Mag from '../../components/Magnifier';
import Bigimg from '../../static/img/m4.jpg';
class ConSole extends React.Component {
    render(){
        var size = {
            height: 380,
            width: 276
        };
        return(
            <div>
                <div>{this.props.params.id}1</div>
                <Mag img={Bigimg} size={size}/>
            </div>

        )
    }
}


export default ConSole;