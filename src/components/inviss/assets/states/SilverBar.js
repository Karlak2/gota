import React, { Component } from 'react'

export class SilverBar extends Component {
    hiddenUpgrade=()=>{
        return {
            display:this.props.upgradeTypes[1].required<=this.props.upgradeLevel ? 'none' :'block' 
        }
    }
    select=()=>{
        this.props.selectedUpgrade('silverBar')
    }
    render() {
        return (
            <div className="upgradeUpgrade silverBar">
                <div className="coinBucket">
                    <div className="upgradeCounter">
                        <span>{this.props.upgradeTypes[1].act}</span>/<span>{this.props.upgradeTypes[1].max}</span>
                    </div>
                    <img onClick={this.select}
                        src="/pictures/buildings/Upgrades/Counting_House_Silver_Bars_Upgrade.png" 
                        alt="coin"
                        width="80px"
                        height="80px"
                    ></img>
                    <div style={this.hiddenUpgrade()}
                        className="requiredUpgrades">
                        <p>1 Upgrades</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default SilverBar
