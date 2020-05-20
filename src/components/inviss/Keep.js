import React, { Component } from 'react'

export class Keep extends Component {
    closeTab=()=>{
        document.getElementsByClassName('Keep')[0].classList.add('hidden')
    }
    render() {
        return (
            <div className="Keep hidden">
                <div className="countCss">
                    <div onClick={this.closeTab} className="closeButton" >X</div>
                    <div className="buildingTop">
                        <div className="buildingType">
                            <img className="buildImage"
                                 src="/pictures/buildings/Keep.jpg" 
                                 alt="count" 
                                 width="140px" 
                                 height="140px">

                            </img>
                            <div className="nameField">
                                <h3>Keep</h3>
                                <h5>Let' take an army!</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Keep
