import React, { Component } from 'react'
import CommonPasture from './states/CommonPasture'
import Mill from './states/Mill'
import Storehouse from './states/Storehouse'
import Tannery from './states/Tannery'
import Bakery from './states/Bakery'
import Brewhouse from './states/Brewhouse'

export class VillageUpgrades extends Component {
    selectedUpgrade=(event)=>{
        this.props.selectedUpgrade(event)
    }
    render() {
        return (
            <div className="upgrades">
                <div className="upgradesTop">
                    <CommonPasture selectedUpgrade={this.selectedUpgrade} curr={this.props.curr}/>
                    <Mill selectedUpgrade={this.selectedUpgrade} curr={this.props.curr}/>
                    <Storehouse selectedUpgrade={this.selectedUpgrade} curr={this.props.curr}/>
                </div>
                <div className="upgradesBottom">
                    <Tannery selectedUpgrade={this.selectedUpgrade} curr={this.props.curr} upgradeLevel={this.props.upgradeLevel}/>
                    <Bakery selectedUpgrade={this.selectedUpgrade} curr={this.props.curr} upgradeLevel={this.props.upgradeLevel}/>
                    <Brewhouse selectedUpgrade={this.selectedUpgrade} curr={this.props.curr} upgradeLevel={this.props.upgradeLevel}/>
                </div>
            </div>
        )
    }
}

export default VillageUpgrades
