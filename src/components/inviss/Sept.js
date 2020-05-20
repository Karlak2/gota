import React, { Component } from 'react'

export class Sept extends Component {
    closeTab=()=>{
        document.getElementsByClassName('Sept')[0].classList.add('hidden')
    }
    render() {
        return (
            <div className="Sept hidden">
                <h1>Sept</h1>
            </div>
        )
    }
}

export default Sept
