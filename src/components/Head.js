import React, { Component } from 'react';
import Bar from './Bar';
import Name from './Name';
import Silver from './Silver';
import Gold from './Gold';


class Head extends Component {
    state={
        progress:0
    }
    render() { 
        return ( 
            <div className="head">
                <Name name={this.props.name}/>
                <Bar prog={this.state.progress}/>
                <Silver storage={this.props.storage}/>
                <Gold storage={this.props.storage}/>
            </div>
         );
    }
}
 
export default Head;