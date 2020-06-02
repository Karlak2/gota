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
import Storage from '../components/inviss/Storage'


export class Invisible extends Component {
    changeResource=(event)=>{
        console.log(event)
        this.props.changeResource(event)
    }
    change=()=>{
        this.props.change()
    }
    count=()=>{
        this.props.count()
    }
    render() {
        return (
            <React.Fragment>
                <Storage title={this.props.title} stats={this.props.stats} name={this.props.name}/>
                <CountingHouse silver={this.props.silver} count={this.count} timers={this.props.timers[0]} upgrades={this.props.upgrades[0]} change={this.change} changeResource={this.changeResource} storage={this.props.storage}/>
                <Keep collect={this.collect}/>
                <Smithy/>
                <VillageCenter name={this.props.name} timers={this.props.timers[3]} upgrades={this.props.upgrades[3]} change={this.change} changeResource={this.changeResource} purchase={this.purchase} storage={this.props.storage}/>
                <Market/>
                <Embassy/>
                <Godswood/>
                <Holdfast/>
                <RhllorTemple/>
                <Sept/>
                <Treasury/>
                <Workshop />
            </React.Fragment>
        )
    }
}

export default Invisible
