import React, { Component } from 'react'

export class Silver extends Component {
    render() {
        return (
            <div className="silver">
                <img src='/pictures/SilverIcon.png' alt='Silver' width='40px' height="40px"></img>
                <h3>{this.props.storage[0].amount}</h3>
            </div>
        )
    }
}

export default Silver
