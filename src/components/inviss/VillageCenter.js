import React, { Component } from 'react'

import VillageUpgrades from './assets/VillageUpgrades'
import VillageDetails from './assets/VillageDetails'
import VillageProduction from './assets/VillageProduction'

export class VillageCenter extends Component {
    state={
        upgradeTypes:[
            {
                name:'commonPasture',
                act:0,
                max:4,
                pics:"/pictures/buildings/Upgrades/Village_Center_Common_Pasture_Upgrade.png",
                head:"Common Pasture",
                required:0,
                typeOfUpgrade:['prodSpeed','enable'],
                amountOfUpgrade:[['stone','horse'],'horse']
            },{
                name:'mill',
                act:0,
                max:4,
                pics:"/pictures/buildings/Upgrades/Village_Center_Mill_Upgrade.png",
                head:"Mill",
                required:0,
                typeOfUpgrade:['prodSpeed','enable'],
                amountOfUpgrade:[['fish','ore'],'ore']
            },{
                name:'storeHouse',
                act:0,
                max:4,
                pics:"/pictures/buildings/Upgrades/Village_Center_Storehouse_Upgrade.png",
                head:"Storehouse",
                required:0,
                typeOfUpgrade:['prodSpeed','enable'],
                amountOfUpgrade:[['iron','wood'],'wood']
            },{
                name:'tannery',
                act:0,
                max:4,
                pics:"/pictures/buildings/Upgrades/Village_Center_Tannery_Upgrade.png",
                head:"Tannery",
                required:5,
                typeOfUpgrade:['prodSpeed','enable'],
                amountOfUpgrade:[['fur','cloth'],'cloth']
            },{
                name:'bakery',
                act:0,
                max:4,
                pics:"/pictures/buildings/Upgrades/Village_Center_Bakery_Upgrade.png",
                head:"Bakery",
                required:5,
                typeOfUpgrade:['prodSpeed','enable'],
                amountOfUpgrade:[['smallfolk','grains'],'grains']
            },{
                name:'brewhouse',
                act:0,
                max:4,
                pics:"/pictures/buildings/Upgrades/Village_Center_Brewhouse_Upgrade.png",
                head:"Brewhouse",
                required:5,
                typeOfUpgrade:['prodAmount'],
                amountOfUpgrade:[1]
            }

        ],
        upgrades:[
        [
            {
                level:1,
                requirements:[
                    {type:'silver',amount:400},
                    {type:'smallfolk',amount:1}
                ],
                gives:"5% faster production time for Stone and Horses"
            },
            {
                level:2,
                requirements:[
                    {type:'silver',amount:800},
                    {type:'smallfolk',amount:1}
                ],
                gives:"10% faster production time for Stone and Horses"
            },
            {
                level:3,
                requirements:[
                    {type:'silver',amount:1200},
                    {type:'smallfolk',amount:1}
                ],
                gives:"15% faster production time for Stone and Horses"
            },
            {
                level:4,
                requirements:[
                    {type:'silver',amount:1600},
                    {type:'smallfolk',amount:1}
                ],
                gives:"20% faster production time for Stone and Horses"
            }
        ],[
            {
                level:1,
                requirements:[
                    {type:'silver',amount:400},
                    {type:'smallfolk',amount:1}
                ],
                gives:"Enables production of Ore, 5% faster production time for Fish and Ore"
            },
            {
                level:2,
                requirements:[
                    {type:'silver',amount:800},
                    {type:'smallfolk',amount:1}
                ],
                gives:"10% faster production time for Fish an Ore"
            },
            {
                level:3,
                requirements:[
                    {type:'silver',amount:1200},
                    {type:'smallfolk',amount:1}
                ],
                gives:"15% faster production time for Fish an Ore"
            },
            {
                level:4,
                requirements:[
                    {type:'silver',amount:1600},
                    {type:'smallfolk',amount:1}
                ],
                gives:"20% faster production time for Fish an Ore"
            }
        ],[
            {
                level:1,
                requirements:[
                    {type:'silver',amount:400},
                    {type:'fish',amount:1}
                ],
                gives:"Enables production of Wood, 5% faster production time for Iron and Wood"
            },
            {
                level:2,
                requirements:[
                    {type:'silver',amount:800},
                    {type:'fish',amount:1}
                ],
                gives:"10% faster production time for Iron and Wood"
            },
            {
                level:3,
                requirements:[
                    {type:'silver',amount:1200},
                    {type:'fish',amount:1}
                ],
                gives:"15% faster production time for Iron and Wood"
            },
            {
                level:4,
                requirements:[
                    {type:'silver',amount:1600},
                    {type:'fish',amount:1}
                ],
                gives:"20% faster production time for Iron and Wood"
            }
        ],[
            {
                level:1,
                requirements:[
                    {type:'silver',amount:400},
                    {type:'fur',amount:1}
                ],
                gives:"Enables production of Cloth, 5% faster production time for Fur and Cloth"
            },
            {
                level:2,
                requirements:[
                    {type:'silver',amount:800},
                    {type:'fur',amount:1}
                ],
                gives:"10% faster production time for Fur and Cloth"
            },
            {
                level:3,
                requirements:[
                    {type:'silver',amount:1200},
                    {type:'fur',amount:1}
                ],
                gives:"15% faster production time for Fur and Cloth"
            },
            {
                level:4,
                requirements:[
                    {type:'silver',amount:1600},
                    {type:'fur',amount:1}
                ],
                gives:"20% faster production time for Fur and Cloth"
            }
        ],[
            {
                level:1,
                requirements:[
                    {type:'silver',amount:400},
                    {type:'stone',amount:1}
                ],
                gives:"Enables production of Grains, 5% faster production time for Smallfolk and Grains"
            },
            {
                level:2,
                requirements:[
                    {type:'silver',amount:800},
                    {type:'stone',amount:1}
                ],
                gives:"10% faster production time for Smallfolk and Grains"
            },
            {
                level:3,
                requirements:[
                    {type:'silver',amount:1200},
                    {type:'stone',amount:1}
                ],
                gives:"15% faster production time for Smallfolk and Grains"
            },
            {
                level:4,
                requirements:[
                    {type:'silver',amount:1600},
                    {type:'stone',amount:1}
                ],
                gives:"20% faster production time for Smallfolk and Grains"
            }
        ],[
            {
                level:1,
                requirements:[
                    {type:'gold',amount:10},
                    {type:'silver',amount:1000},
                    {type:'cloth',amount:1}
                ],
                gives:"Increases Production Capacity by +1"
            },
            {
                level:2,
                requirements:[
                    {type:'silver',amount:2000},
                    {type:'cloth',amount:1}
                ],
                gives:"Increases Production Capacity by +2"
            },
            {
                level:3,
                requirements:[
                    {type:'silver',amount:3000},
                    {type:'cloth',amount:1}
                ],
                gives:"Increases Production Capacity by +3"
            },
            {
                level:4,
                requirements:[
                    {type:'silver',amount:4000},
                    {type:'cloth',amount:1}
                ],
                gives:"Increases Production Capacity by +4"
            },
            {
                level:5,
                requirements:[
                    {type:'silver',amount:5000},
                    {type:'cloth',amount:1}
                ],
                gives:"Increases Production Capacity by +5"
            }
        ]
    ],
    times:['0:1','0:1','0:1','0:1','0:1','0:1','22:0','28:0','36:0',
        '44:0','56:0','1:10:0','1:28:0','1:50:0','2:16:0','2:50:0','3:34:0','4:26:0','5:34:0',
        '6:56:0','8:40:0','10:50:0','13:34:0','16:56:0','21:10:0'],
    selected:0,
    upgradeLevel:0,
    incomingUpgrade:"",
    hour:"",
    minute:"",
    sec:"",
    ev:"",
    buildingState:"idle",
    productedAmount:1,
    production:[
        {
            resource:'stone',
            prodTime:{minute:0,sec:5},
            required:""
        },{
            resource:'horse',
            prodTime:{minute:20,sec:0},
            required:"Common Pasture"
         },{
            resource:'iron',
            prodTime:{minute:20,sec:0},
            required:""
         },{
            resource:'fish',
            prodTime:{minute:20,sec:0},
            required:""
         },{
            resource:'fur',
            prodTime:{minute:20,sec:0},
            required:""
         },{
            resource:'smallfolk',
            prodTime:{minute:20,sec:0},
            required:""
         },{
            resource:'ore',
            prodTime:{minute:20,sec:0},
            required:"Mill"
         },{
            resource:'wood',
            prodTime:{minute:20,sec:0},
            required:"Storehouse"
         },{
            resource:'cloth',
            prodTime:{minute:20,sec:0},
            required:"Tannery"
         },{
            resource:'grains',
            prodTime:{minute:20,sec:0},
            required:"Bakery"
         }
    ],
    selectedResource:""
    }
    upgradeBuilding=(event)=>{
        let a=this.state;
        let newVal=a.upgradeTypes
        let lev=a.upgradeLevel
        let time=this.state.times[lev].split(':')
        let hour,minute,sec
        let searched=newVal[event].act
        let x=this.state.upgrades[event][searched].requirements
        x.map(row=>row.amount=-row.amount)
        this.props.changeResource(x)
        x.map(row=>row.amount=-row.amount)
        if(time.length===2){
            hour=0
            minute=time[0]
            sec=time[1]
        } else if(time.length===3){
            hour=time[0]
            minute=time[1]
            sec=time[2]
        }
        this.setState({incomingUpgrade:newVal[event].head,
                        hour:hour,
                        minute:minute,
                    sec:sec})
        console.log(time)
        this.clock(event)
    }
    clock=(event)=>{
        this.myInterval = setInterval(() => {
            const { sec, minute } = this.state
            if (sec > 0) {
                this.setState(({ sec }) => ({
                    sec: sec - 1
                }))
            }
            if (sec === 0) {
                if (minute != 0) {
                    this.setState(({ minute }) => ({
                        minute: minute - 1,
                        sec: 59
                    }))
                } else {
                    console.log(minute,sec)
                    console.log("ting")
                    clearInterval(this.myInterval)
                    document.getElementById("finishVillageUpgrade").style.display="inline-flex"
                    this.setState({hour:"",minute:"",sec:"",ev:event})
                }
            } 
        }, 1000)


    }
    finishUpgrade=()=>{
        console.log("yeah")
        let a=this.state;
        let event=this.state.ev
        let newVal=a.upgradeTypes
        let lev=a.upgradeLevel  
        newVal[event].act+=1
        let am=this.state.productedAmount
        newVal[event].typeOfUpgrade.map((type,index)=>{
            if(type==='prodSpeed'){
                this.state.production.map(row=>{
                    if(row.resource===newVal[event].amountOfUpgrade[index][0]||row.resource===newVal[event].amountOfUpgrade[index][1]){
                        row.prodTime.minute=row.prodTime.minute-1
                    }
                })
            } else if(type==='enable'){
                this.state.production.map(row=>{
                    if(row.resource===newVal[event].amountOfUpgrade[index]){
                        row.required=""
                    }
                })
            } else if(type==="prodAmount"){
                am=am+1
            }
        })
        lev=lev+1
        if(newVal[event].act>newVal[event].max){return}
        this.setState({upgradeTypes:newVal,
            upgradeLevel:lev,
            incomingUpgrade:"",
            productedAmount:am
        })
            document.getElementById("finishVillageUpgrade").style.display="none"

    }
    style=()=>{
        let {hour,minute,sec}=this.state
        return{
            margin:'5px auto',
            color:"white",
            fontSize:"20px",
            display:hour===""&&minute===""&&sec==="" ? 'none':'inline-flex'
        }
    }
    closeTab=()=>{
        document.getElementsByClassName('VillageCenter')[0].classList.add('hidden')
    }
    selectedUpgrade =(event)=>{
        var ii
        this.state.upgradeTypes.filter((t,index)=>{
            if(t.name===event){
                ii=index
            }
            return ii
        })
        this.setState({selected:ii});
    }
    production=()=>{
        document.getElementById('villageUpgrade').classList.remove('hidden')
        document.getElementById('villageUpgrade').classList.add('hidden')
        document.getElementById('villageproduction').classList.remove('hidden')
    }
    upgradeButton=()=>{
        document.getElementById('villageproduction').classList.remove('hidden')
        document.getElementById('villageproduction').classList.add('hidden')
        document.getElementById('villageUpgrade').classList.remove('hidden')
    }
    selectResource=(y)=>{
        this.setState({selectedResource:y})
    }
    finish=(event)=>{
        let am=this.state.productedAmount
        let cucc=this.state.production[event].resource
        let resp=[{type:cucc,amount:am}]
        console.log(resp)
        this.props.changeResource(resp)
    }
    render() {
        const{hour,minute,sec}=this.state
        return (
            <div className="VillageCenter hidden">
                <div className='selectMode'>
                    <div onClick={this.upgradeButton} className="buildingHeadButton">Upgrade</div>
                    <div onClick={this.production} className="buildingHeadButton">Production</div>
                </div>
                <div className="countCss">
                    <div onClick={this.closeTab} className="closeButton" >X</div>
                    <div id="villageUpgrade">
                        <div className="buildingTop">
                            <div className="buildingType">
                                <img className="buildImage"
                                    src="/pictures/buildings/VillageCenter.jpg" 
                                    alt="count" 
                                    width="140px" 
                                    height="140px">

                                </img>
                                <div className="nameField">
                                    <h3>Village Center</h3>
                                    <h5>Let's produce something</h5>
                                </div>
                            </div>
                            <div className="production">
                                /*kijelző*/
                            </div>
                        </div>
                        <div className="buildingMiddle">
                            <div style={this.style()}>
                                <img src="/pictures/buildings/Upgrades/Upgrade_Icon.png" 
                                    alt="upgrade"
                                    width="25px"
                                    height="25px"></img>
                                <p>{this.state.incomingUpgrade}  {`${hour}h `}{`${minute}m `}{ sec < 10 ? `0${ sec }s` : `${sec}s` }</p>
                            </div> 
                            <div id="finishVillageUpgrade" style={{display:"none"}}>
                                <p style={{color:"white",margin:"6px"}}>{this.state.incomingUpgrade}</p>
                                <button className="finishButton" onClick={this.finishUpgrade} id="finishButton">Finish!</button>
                            </div>
                        </div>
                        <div className="buildingBottom">
                            <VillageUpgrades selectedUpgrade={this.selectedUpgrade} 
                                                curr={this.state.upgradeTypes}
                                                upgradeLevel={this.state.upgradeLevel}/>
                            <VillageDetails current={this.state.selected}
                                            curr={this.state.upgradeTypes} 
                                            update={this.state.upgrades}
                                            upgrade={this.upgradeBuilding.bind(this)}
                                            upgradeLevel={this.state.upgradeLevel}
                                            timers={this.state.times}
                                            yetUpgrade={this.state.incomingUpgrade}
                                            storage={this.props.storage}/>
                        </div>
                    </div>
                    <div id="villageproduction" className="hidden">
                        <VillageProduction finish={this.finish} 
                                            clicked={this.selectResource} 
                                            prod={this.state.production}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default VillageCenter
