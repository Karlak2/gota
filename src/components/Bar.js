import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';


export class Bar extends Component {
    state={
        level:0,
        bar:this.props.prog
    }
    render() {
        return (
            <div className="level">
                <h3>Level:{this.state.level}</h3>
                <ProgressBar style={{width:'60px'}} now={this.state.bar} label={`${this.state.bar}%`}/>
            </div>
        );
    }
}

export default Bar;
