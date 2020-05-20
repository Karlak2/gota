import React, { Component } from 'react'
import SilverCoin from '../assets/canProd/SilverCoin'


export class ProdSilver extends Component {
    changeResource=(event)=>{
        console.log(event)
        this.props.changeResource(event)
    }
    render() {
        return (
            <SilverCoin changeResource={this.changeResource} silver={this.props.silver} capacity={this.props.capacity} productionRate={this.props.productionRate}/>
        )
    }
}

export default ProdSilver


