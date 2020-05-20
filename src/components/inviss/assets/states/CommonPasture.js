import React, { Component } from 'react'

export class CommonPasture extends Component {
    select=()=>{
        this.props.selectedUpgrade('commonPasture')
    }
    render() {
        return (
            <div className="upgradeUpgrade commonPasture">
                <div className="coinBucket">
                    <div className="upgradeCounter">
        <span>{this.props.curr[0].act}</span>/<span>{this.props.curr[0].max}</span>
                    </div>
                    <img onClick={this.select}
                        src="/pictures/buildings/Upgrades/Village_Center_Common_Pasture_Upgrade.png" 
                        alt="coin"
                        width="80px"
                        height="80px"
                    ></img>
                </div>
            </div>
        )
    }   
}
export default CommonPasture
