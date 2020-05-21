import React, { Component } from 'react'

export class Name extends Component {

    render() {
        return (
            <h3 id="nickName">{this.props.name}</h3>

        );
    }
}

export default Name;
