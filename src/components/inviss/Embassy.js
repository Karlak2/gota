import React, { Component } from 'react'

export class Embassy extends Component {
    closeTab=()=>{
        document.getElementsByClassName('Embassy')[0].classList.add('hidden')
    }
    render() {
        return (
            <div className="Embassy hidden">
                <h1>Embassy</h1>
            </div>
        )
    }
}

export default Embassy
