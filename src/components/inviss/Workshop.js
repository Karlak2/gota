import React, { Component } from 'react'

export class Workshop extends Component {
    closeTab=()=>{
        document.getElementsByClassName('Workshop')[0].classList.add('hidden')
    }
    render() {
        return (
            <div className="Workshop hidden">
                <h1>Workshop</h1>
            </div>
        )
    }
}

export default Workshop
