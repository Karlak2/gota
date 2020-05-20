import React, { Component } from 'react'

export class Market extends Component {
    closeTab=()=>{
        document.getElementsByClassName('Market')[0].classList.add('hidden')
    }
    render() {
        return (
            <div className="Market hidden">
                <h1>Market</h1>
            </div>
        )
    }
}

export default Market
