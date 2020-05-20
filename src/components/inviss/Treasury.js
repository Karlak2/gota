import React, { Component } from 'react'

export class Treasury extends Component {
    closeTab=()=>{
        document.getElementsByClassName('Treasury')[0].classList.add('hidden')
    }
    render() {
        return (
            <div className="Treasury hidden">
                <h1>Treasury</h1>
            </div>
        )
    }
}

export default Treasury
