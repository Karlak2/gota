import React, { Component } from 'react'

export class BagsOfCoins extends Component {
    hiddenUpgrade=()=>{
        return {
            display:this.props.upgradeTypes[2].required<=this.props.upgradeLevel ? 'none' :'block' 
        }
    }
    select=()=>{
        this.props.selectedUpgrade('bagsOfCoins')
    }
    render() {
        return (
            <div className="upgradeUpgrade bagsOfCoins">
                <div className="coinBucket">
                    <div className="upgradeCounter">
                        <span>{this.props.upgradeTypes[2].act}</span>/<span>{this.props.upgradeTypes[2].max}</span>
                    </div>
                    <img onClick={this.select}
                        src="/pictures/buildings/Upgrades/Counting_House_Bags_of_Coins_Upgrade.png" 
                        alt="coin"
                        width="80px"
                        height="80px"
                    ></img>
                    <div style={this.hiddenUpgrade()}
                    className="requiredUpgrades">
                        <p>10 Upgrades</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BagsOfCoins
