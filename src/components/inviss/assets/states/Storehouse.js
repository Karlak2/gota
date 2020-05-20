import React, { Component } from 'react'

export class Storehouse extends Component {
    select=()=>{
        this.props.selectedUpgrade('storeHouse')
    }
    render() {
        return (
            <div className="upgradeUpgrade storeHouse">
                <div className="coinBucket">
                    <div className="upgradeCounter">
                        <span>{this.props.curr[2].act}</span>/<span>{this.props.curr[2].max}</span>
                    </div>
                    <img onClick={this.select}
                        src="/pictures/buildings/Upgrades/Village_Center_Storehouse_Upgrade.png" 
                        alt="coin"
                        width="80px"
                        height="80px"
                    ></img>
                </div>
            </div>
        )
    }
}

export default Storehouse
