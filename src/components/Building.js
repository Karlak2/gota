import React, { Component } from 'react'

export class Building extends Component {
    onEvent=()=>{
            document.getElementsByClassName(this.props.source)[0].classList.remove('hidden')
            let x=this.props.buildingId
            return this.props.onChange(x)
    }
    render() {
        return (
            <div onClick={()=>this.onEvent()} className={`simpleBuilding ${this.props.source}Bottom`}>
                <img src={`/pictures/buildings/${this.props.source}.jpg`} alt="building" width="105px" height="105px"/>
            </div>
        );
    }
}


export default Building
