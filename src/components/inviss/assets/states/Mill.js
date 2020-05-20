import React, { Component } from 'react'

export class Mill extends Component {
    select=()=>{
        this.props.selectedUpgrade('mill')
    }
    render() {
        return (
            <div className="upgradeUpgrade mill">
                <div className="coinBucket">
                    <div className="upgradeCounter">
        <span>{this.props.curr[1].act}</span>/<span>{this.props.curr[1].max}</span>
                    </div>
                    <img onClick={this.select}
                        src="/pictures/buildings/Upgrades/Village_Center_Mill_Upgrade.png" 
                        alt="coin"
                        width="80px"
                        height="80px"
                    ></img>
                </div>
            </div>
        )
    }
}

export default Mill
