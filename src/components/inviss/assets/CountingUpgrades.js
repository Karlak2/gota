import React, { Component } from 'react'
import Coin from './states/Coin'
import SilverBar from './states/SilverBar'
import BagsOfCoins from './states/BagsOfCoins'
import MoneyChests from './states/MoneyChests'

export class CountingUpgrades extends Component {
    selectedUpgrade=(event)=>{
        this.props.selectedUpgrade(event)
    }
    render() {
        return (
            <div className="upgrades">
                <div className="upgradesTop">
                    <Coin selectedUpgrade={this.selectedUpgrade} upgradeTypes={this.props.upgradeTypes}/>
                    <SilverBar selectedUpgrade={this.selectedUpgrade} 
                               upgradeTypes={this.props.upgradeTypes} 
                               upgradeLevel={this.props.upgradeLevel}/>
                </div>
                <div className="upgradesBottom">
                    <BagsOfCoins selectedUpgrade={this.selectedUpgrade} 
                                 upgradeTypes={this.props.upgradeTypes}
                                 upgradeLevel={this.props.upgradeLevel}/>
                    <MoneyChests selectedUpgrade={this.selectedUpgrade} 
                                 upgradeTypes={this.props.upgradeTypes}
                                 upgradeLevel={this.props.upgradeLevel}/>
                </div>
            </div>
        )
    }
}

export default CountingUpgrades
