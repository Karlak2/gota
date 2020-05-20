import React, { Component } from 'react'

export class Godswood extends Component {
    closeTab=()=>{
        document.getElementsByClassName('Godswood')[0].classList.add('hidden')
    }
    render() {
        return (
            <div className="Godswood hidden">
                <h1>Godswood</h1>
            </div>
        )
    }
}

export default Godswood
