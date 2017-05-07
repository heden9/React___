import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

class App extends React.Component {
    render(){
        return(
            <div>
                <Header title="我是一个header！"/>
                <div>{this.props.children}</div>
                <Footer to="/404" title="我是一个footer！"/>
            </div>
        )
    }
}

export default App;