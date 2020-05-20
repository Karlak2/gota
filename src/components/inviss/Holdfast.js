import React, { Component } from 'react'

export class Holdfast extends Component {
    closeTab=()=>{
        document.getElementsByClassName('Holdfast')[0].classList.add('hidden')
    }
    render() {
        return (
            <div className="Holdfast hidden">
                <h1>Holdfast</h1>
            </div>
        )
    }
}

export default Holdfast
