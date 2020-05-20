import React, { Component } from 'react'

export class SilverCoin extends Component {
    changeResource=()=>{
        this.props.changeResource(this.props.silver)
    }
    render() {
        return (
            <div>
                <p className="collectType">Silver Coins</p>
                <img src="/pictures/buildings/Upgrades/silver.jpg" alt="silver" width="270px" height="125px;"></img>
                <button onClick={this.changeResource} className="collectButton">Collect</button>
                <div>Stored:{this.props.silver}/{this.props.capacity}</div>
                <div>Per hour:{this.props.productionRate}</div>
            </div>
        )
    }
}

export default SilverCoin
