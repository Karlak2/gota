import React, { Component } from 'react'

export class Brewhouse extends Component {
    select=()=>{
        this.props.selectedUpgrade('brewhouse')
    }
    hiddenUpgrade=()=>{
        return {
            display:this.props.curr[5].required<=this.props.upgradeLevel ? 'none' :'block' 
        }
    }
    render() {
        return (
            <div className="upgradeUpgrade brewhouse">
                <div className="coinBucket">
                    <div className="upgradeCounter">
        <span>{this.props.curr[5].act}</span>/<span>{this.props.curr[5].max}</span>
                    </div>
                    <img onClick={this.select}
                        src="/pictures/buildings/Upgrades/Village_Center_Brewhouse_Upgrade.png" 
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

export default Brewhouse
