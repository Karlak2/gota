import React, { Component } from 'react'
import Building from './Building'



export class Buildings extends Component {
    state={
        actShowed:"",
        buildingNames:[
            {id:1, source: 'CountingHouse'},
            {id:2, source: 'Keep'},
            {id:3, source: 'Smithy'},
            {id:4, source: 'VillageCenter'},
            {id:5, source: 'Embassy'},
            {id:6, source: 'Market'},
            {id:7, source: 'Sept'},
            {id:8, source: 'Godswood'},
            {id:9, source: 'RhllorTemple'},
            {id:10,source:'Holdfast'},
            {id:11,source:'Workshop'},
            {id:12,source:'Treasury'}
        ],
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.actShowed!==""){
            if(prevState.actShowed!==this.state.actShowed){
                let closeBuilding=this.state.buildingNames.filter(row=>row.id===prevState.actShowed)[0]
                console.log(closeBuilding.source)
                document.getElementsByClassName(`${closeBuilding.source}`)[0].classList.add('hidden')
            }
        }
    }
    logId=()=>{
        console.log(this.props)
    }
    onEvent=(event)=>{
        this.setState({actShowed:event})
    }
    render() {
        return(
            <div className='buildings'>
                {this.state.buildingNames.map(build=>{
                    return <Building 
                    key={build.id} 
                    buildingId={build.id} 
                    source={build.source}
                    actShowed={this.state.actShowed}
                    onChange={this.onEvent.bind(this)}
                    ></Building>
                })}
            </div>
        )
    }
}

export default Buildings
