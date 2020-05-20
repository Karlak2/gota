import React, { Component } from 'react'

export class Bakery extends Component {
    select=()=>{
        this.props.selectedUpgrade('bakery')
    }
    hiddenUpgrade=()=>{
        return {
            display:this.props.curr[4].required<=this.props.upgradeLevel ? 'none' :'block' 
        }
    }
    render() {
        return (
            <div className="upgradeUpgrade bakery">
                <div className="coinBucket">
                    <div className="upgradeCounter">
        <span>{this.props.curr[4].act}</span>/<span>{this.props.curr[4].max}</span>
                    </div>
                    <img onClick={this.select}
                        src="/pictures/buildings/Upgrades/Village_Center_Bakery_Upgrade.png" 
                        alt="coin"
                        width="80px"
                        height="80px"
                    ></img>
                    <div style={this.hiddenUpgrade()}
                        className="requiredUpgrades">
                        <p>5 Upgrades</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Bakery
