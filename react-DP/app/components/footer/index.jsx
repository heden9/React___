import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component{
    render(){
        return(
            <div>
                <Link to={this.props.to}>{this.props.title}</Link>
            </div>
        )
    }
}
export default Footer;