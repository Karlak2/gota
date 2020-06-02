import React, { Component } from 'react'

export class Smithy extends Component {
    closeTab=()=>{
        document.getElementsByClassName('Smithy')[0].classList.add('hidden')
    }
    render() {
        return (
            <div className="Smithy InvisibleTemp hidden">
                <div className="countCss">
                    <div onClick={this.closeTab} className="closeButton" >X</div>
                    <div className="buildingTop">
                        <div className="buildingType">
                            <img className="buildImage"
                                 src="/pictures/buildings/Smithy.jpg" 
                                 alt="count" 
                                 width="140px" 
                                 height="140px">
                            </img>
                            <div className="nameField">
                                <h3>Smithy</h3>
                                <h5>Let' forge weapons!</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Smithy
