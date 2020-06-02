import React, { Component } from 'react'

import VillageUpgrades from './assets/VillageUpgrades'
import VillageDetails from './assets/VillageDetails'
import VillageProduction from './assets/VillageProduction'
import axios from 'axios'

export class VillageCenter extends Component {
    state={
        upgradeTypes:[
            {
                name:'commonPasture',
                act:this.props.upgrades[0],
                max:4,
                pics:"/pictures/buildings/Upgrades/Village_Center_Common_Pasture_Upgrade.png",
                head:"Common Pasture",
                required:0,
                typeOfUpgrade:['prodSpeed','enable'],
                amountOfUpgrade:[['stone','horse'],'horse']
            },{
                name:'mill',
                act:this.props.upgrades[1],
                max:4,
                pics:"/pictures/buildings/Upgrades/Village_Center_Mill_Upgrade.png",
                head:"Mill",
                required:0,
                typeOfUpgrade:['prodSpeed','enable'],
                amountOfUpgrade:[['fish','ore'],'ore']
            },{
                name:'storeHouse',
                act:this.props.upgrades[2],
                max:4,
                pics:"/pictures/buildings/Upgrades/Village_Center_Storehouse_Upgrade.png",
                head:"Storehouse",
                required:0,
                typeOfUpgrade:['prodSpeed','enable'],
                amountOfUpgrade:[['iron','wood'],'wood']
            },{
                name:'tannery',
                act:this.props.upgrades[3],
                max:4,
                pics:"/pictures/buildings/Upgrades/Village_Center_Tannery_Upgrade.png",
                head:"Tannery",
                required:5,
                typeOfUpgrade:['prodSpeed','enable'],
                amountOfUpgrade:[['fur','cloth'],'cloth']
            },{
                name:'bakery',
                act:this.props.upgrades[4],
                max:4,
                pics:"/pictures/buildings/Upgrades/Village_Center_Bakery_Upgrade.png",
                head:"Bakery",
                required:5,
                typeOfUpgrade:['prodSpeed','enable'],
                amountOfUpgrade:[['smallfolk','grains'],'grains']
            },{
                name:'brewhouse',
                act:this.props.upgrades[5],
                max:5,
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
                gives:"Enables production of horse, 5% faster production time for Stone and Horses"
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
    times:['0:20','0:20','0:20','12:0','14:0','18:0','22:0','28:0','36:0',
        '44:0','56:0','1:10:0','1:28:0','1:50:0','2:16:0','2:50:0','3:34:0','4:26:0','5:34:0',
        '6:56:0','8:40:0','10:50:0','13:34:0','16:56:0','21:10:0'],
        production:[
            {
                resource:'stone',
                prodTime:{hour:0,minute:20,sec:0},
                required:""
            },{
                resource:'horse',
                prodTime:{hour:0,minute:20,sec:0},
                required:"Common Pasture"
             },{
                resource:'iron',
                prodTime:{hour:0,minute:20,sec:0},
                required:""
             },{
                resource:'fish',
                prodTime:{hour:0,minute:20,sec:0},
                required:""
             },{
                resource:'fur',
                prodTime:{hour:0,minute:20,sec:0},
                required:""
             },{
                resource:'smallfolk',
                prodTime:{hour:0,minute:20,sec:0},
                required:""
             },{
                resource:'ore',
                prodTime:{hour:0,minute:20,sec:0},
                required:"Mill"
             },{
                resource:'wood',
                prodTime:{hour:0,minute:20,sec:0},
                required:"Storehouse"
             },{
                resource:'cloth',
                prodTime:{hour:0,minute:20,sec:0},
                required:"Tannery"
             },{
                resource:'grains',
                prodTime:{hour:0,minute:20,sec:0},
                required:"Bakery"
             }
        ],        
    selected:0,
    upgradeLevel:0,
    incomingUpgrade:"",
    hour:"",
    minute:"",
    sec:"",
    ev:"",
    buildingState:"idle",
    productedAmount:1,
    selectedResource:"",
    inProduction:false,
    inUpgrade:false
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.name!=this.props.name){
            console.log(prevProps.upgrades,this.props.upgrades)
            let cur=this.state.production
            let upgradeLevel=0
            let newUpgrades=this.state.upgradeTypes
            let am=1
            newUpgrades.map((type,index)=>{
                let speed=20
                type.act=this.props.upgrades[index]
                upgradeLevel+=this.props.upgrades[index]
                type.typeOfUpgrade.map((upg,ind)=>{
                    if(upg==='enable'&&type.act>0){
                        cur.map((row,ind2)=>{
                            if(row.resource===type.amountOfUpgrade[ind]){
                                cur[ind2].required=""
                            }
                        })
                    } else if(upg==='prodSpeed'){
                        type.amountOfUpgrade[ind].map(resou=>{
                            cur.map((row,ind)=>{
                                if(row.resource===resou){
                                    cur[ind].prodTime.minute=speed-this.props.upgrades[index]
                                }
                            })
                        })
                    } else if(upg==="prodAmount"){
                        am+=this.props.upgrades[index]
                    }
                })
            })
            this.setState({upgradeTypes:newUpgrades,production:cur,upgradeLevel:upgradeLevel,productedAmount:am})
            if(this.props.timers.timer[0]!=prevProps.timers.timer[0]){
                let inUpgrade=false;
                let hour,minute,sec=""
                console.log(this.props.timers,prevProps.timers)
                console.log(prevProps.upgrades,this.props.upgrades)
                if(this.props.timers.timer[0]){
                    inUpgrade=true
                    let delta=this.props.timers.time[0]-Math.floor(Date.now()/1000)
                    if(delta>=0){
                        hour=Math.floor(delta/3600)
                        minute=Math.floor((delta-3600*hour)/60)
                        sec=delta-3600*hour-60*minute
                    } else{
                        hour=""
                        minute=""
                        sec=""
                        document.getElementById("finishVillageUpgrade").style.display="inline-flex"
                    }
                } else {
                    hour=minute=sec=""
            }    
            if(hour>0||minute>0||sec>0){
                this.clock(this.props.timers.upgrade[1])
            }
            console.log(am,'am')
            this.setState({
                inUpgrade:inUpgrade,
                ev:this.props.timers.upgrade[1],
                incomingUpgrade:this.props.timers.upgrade[0],
                hour:hour,
                minute:minute,
                sec:sec
            })
            
        }
    } else {
            return
        }
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
        let newTime=Math.floor(Date.now()/1000)+3600*Number(hour)+60*Number(minute)+Number(sec)
        axios.put('http://localhost:8080/timersUpdate',{
            data:{
                name:document.getElementById('nickName').innerHTML,
                type:'upgrade',
                building:'VillageCenter',
                timer:true,
                time:newTime,
                upgrade:[newVal[event].head,event]
            }
        })

        this.clock(event)
    }
    clock=(event)=>{
        console.log('clock starting')
        this.villageUpgradeInterval = setInterval(() => {
            const { sec, minute,hour } = this.state
            console.log(sec, minute,hour)
            if (sec > 0) {
                this.setState(({ sec }) => ({
                    sec: sec - 1
                }))
            } else {
                if (minute != 0) {
                    this.setState(({ minute }) => ({
                        minute: minute - 1,
                        sec: 59
                    }))
                } else{
                    if(hour!=0){
                        this.setState(({ hour }) => ({
                            hour: hour - 1,
                            minute: 59,
                            sec:59
                        }))  
                    } else {
                        console.log(minute,sec)
                        console.log("ting")
                        clearInterval(this.villageUpgradeInterval)
                        document.getElementById("finishVillageUpgrade").style.display="inline-flex"
                        this.setState({hour:"",minute:"",sec:"",ev:event})
                    }
                }
            } 
        }, 1000)


    }
    finishUpgrade=()=>{
        let a=this.state;
        let event=this.state.ev
        let newVal=a.upgradeTypes
        console.log(event)
        if(newVal[event].act===newVal[event].max){return}
        axios.put('http://localhost:8080/updateUpgrades',{name:document.getElementById('nickName').innerHTML,type:3,row:event})
        .then(res=>{
            if(res.data.suc){
                this.setState({
                incomingUpgrade:"",
                minute:"",
                sec:"",
                hour:""})
                this.props.change()
            }
        })
        .catch(err=>console.log(err))
        .finally(
            document.getElementById("finishVillageUpgrade").style.display="none"
        )
        axios.put('http://localhost:8080/timersUpdate',{
        data:{
            name:document.getElementById('nickName').innerHTML,
            type:'upgrade',
            building:'VillageCenter',
            timer:false,
            time:0,
            upgrade:["",0]
        }
    }).then(res=>{
        let lvl=this.state.upgradeLevel
        let cur=this.state.production
        let prodAmount=this.state.productedAmount
        newVal[event].typeOfUpgrade.map((upg,ind)=>{
            let speed=20
            if(upg==='enable'){
                cur.map((row,ind2)=>{
                    if(row.resource===newVal[event].amountOfUpgrade[ind]){
                        cur[ind2].required=""
                    }
                })
            } else if(upg==="prodSpeed"){
                newVal[event].amountOfUpgrade[ind].map(resou=>{
                    cur.map((row,ind)=>{
                        if(row.resource===resou){
                            cur[ind].prodTime.minute=speed-1
                        }
                    })
                })

            } else if(upg==='prodAmount'){
                prodAmount=prodAmount+1
            }
        })
        newVal[event].act=newVal[event].act+1
        lvl=lvl+1
        this.setState({
            inUpgrade:false,
            productedAmount:prodAmount,
            production:cur,
            upgradeTypes:newVal,
            upgradeLevel:lvl
        })
        this.props.change()
    })
        return
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
            <div className="VillageCenter InvisibleTemp hidden">
                <div className="countCss">
                    <div className='selectMode'>
                        <div onClick={this.upgradeButton} className="buildingHeadButton">Upgrade</div>
                        <div onClick={this.production} className="buildingHeadButton">Production</div>
                    </div>
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
                                <p>{this.state.incomingUpgrade}  {hour===0?``:`${hour}h `}{`${minute}m `}{ sec < 10 ? `0${ sec }s` : `${sec}s` }</p>
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
                                            prod={this.state.production}
                                            storage={this.props.storage}
                                            name={this.props.name}
                                            timers={this.props.timers}
                                            />
                    </div>
                </div>
            </div>
        )
    }
}

export default VillageCenter
