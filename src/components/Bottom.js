import React, { Component } from 'react'
import Buildings from './Buildings'

export class Bottom extends Component {
    render() {
        return (
            <div className="bottom">
                <Buildings upgrades={this.props.upgrades} timers={this.props.timers}/>
            </div>
        )
    }
}

export default Bottom
