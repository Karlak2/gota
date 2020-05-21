import React, { Component } from 'react'
import CountingHouse from '../components/inviss/CountingHouse';
import Keep from '../components/inviss/Keep';
import Embassy from '../components/inviss/Embassy';
import Godswood from '../components/inviss/Godswood';
import Holdfast from '../components/inviss/Holdfast';
import Market from '../components/inviss/Market';
import RhllorTemple from '../components/inviss/RhllorTemple';
import Sept from '../components/inviss/Sept';
import Smithy from '../components/inviss/Smithy';
import Treasury from '../components/inviss/Treasury';
import VillageCenter from '../components/inviss/VillageCenter';
import Workshop from '../components/inviss/Workshop';

export class Invisible extends Component {
    changeResource=(event)=>{
        console.log(event)
        this.props.changeResource(event)
    }
    change=()=>{
        this.props.change()
    }
    render() {
        return (
            <div className='invisibles'>
                <CountingHouse upgrades={this.props.upgrades[0]} change={this.change} changeResource={this.changeResource} storage={this.props.storage}/>
                <Keep collect={this.collect}/>
                <Smithy/>
                <Market/>
                <Embassy/>
                <Godswood/>
                <Holdfast/>
                <RhllorTemple/>
                <Sept/>
                <Treasury/>
                <VillageCenter upgrades={this.props.upgrades[1]} change={this.change} changeResource={this.changeResource} purchase={this.purchase} storage={this.props.storage}/>
                <Workshop />
            </div>
        )
    }
}

export default Invisible
