import React, { Component } from 'react'

export class Coin extends Component {
    select=()=>{
        this.props.selectedUpgrade('stackCoin')
    }
    render() {
        return (
            <div className="upgradeUpgrade coinUpgrade">
                <div className="coinBucket">
                    <div className="upgradeCounter">
                        <span>{this.props.upgradeTypes[0].act}</span>/<span>{this.props.upgradeTypes[0].max}</span>
                    </div>
                    <img onClick={this.select}
                        src="/pictures/buildings/Upgrades/Counting_House_Stacks_of_Coins_Upgrade.png" 
                        alt="coin"
                        width="80px"
                        height="80px"
                    ></img>
                </div>
            </div>
        )
    }
}

export default Coin
