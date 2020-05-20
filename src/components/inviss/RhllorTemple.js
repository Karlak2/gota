import React, { Component } from 'react'

export class RhllorTemple extends Component {
    closeTab=()=>{
        document.getElementsByClassName('RhllorTemple')[0].classList.add('hidden')
    }
    render() {
        return (
            <div className="RhllorTemple hidden">
                <h1>RhllorTemple</h1>
            </div>
        )
    }
}

export default RhllorTemple
