import React, { Component } from 'react'

export class Silver extends Component {
    render() {
        return (
            <div className="silver">
                <img src='/pictures/SilverIcon.png' alt='Silver' width='20px' height="20px"></img>
                <h3>Silver:{this.props.storage[0].amount}</h3>
            </div>
        )
    }
}

export default Silver
