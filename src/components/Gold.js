import React, { Component } from 'react'

export class Gold extends Component {
    render() {
        return (
            <div className="gold">
                <img src='/pictures/GoldIcon.png' alt='Gold' width='40px' height="40px"></img>
                <h3>{this.props.storage[1].amount}</h3>
            </div>
        )
    }
}

export default Gold
