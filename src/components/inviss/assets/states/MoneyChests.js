import React, { Component } from 'react'

export class MoneyChests extends Component {
    hiddenUpgrade=()=>{
        return {
            display:this.props.upgradeTypes[3].required<=this.props.upgradeLevel ? 'none' :'block' 
        }
    }
    select=()=>{
        this.props.selectedUpgrade('moneyChests')
    }
    render() {
        return (
            <div className="upgradeUpgrade moneyChests">
                <div className="coinBucket">
                    <div className="upgradeCounter">
                        <span>{this.props.upgradeTypes[3].act}</span>/<span>{this.props.upgradeTypes[3].max}</span>
                    </div>
                    <img onClick={this.select}
                        src="/pictures/buildings/Upgrades/Counting_House_Money_Chests_Upgrade.png" 
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

export default MoneyChests
