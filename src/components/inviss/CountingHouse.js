import React, { Component } from 'react'
import CountingUpgrades from './assets/CountingUpgrades'
import CountingDetails from './assets/CountingDetails'
import ProdSilver from './assets/ProdSilver'
import axios from 'axios'

export class CountingHouse extends Component {
    state={
        upgradeTypes:[
            {
                name:'stackCoin',
                act:this.props.upgrades[0],
                max:5,
                pics:"pictures/buildings/Upgrades/Counting_House_Stacks_of_Coins_Upgrade.png",
                head:"Stacks of coins",
                required:0,
                typeOfUpgrade:['capacity'],
                amountOfUpgrade:[300]
            },{
                name:'silverBar',
                act:this.props.upgrades[1],
                max:10,
                pics:"pictures/buildings/Upgrades/Counting_House_Silver_Bars_Upgrade.png",
                head:"Silver Bars",
                required:1,
                typeOfUpgrade:['prod'],
                amountOfUpgrade:[30]
            },{
                name:'bagsOfCoins',
                act:this.props.upgrades[2],
                max:5,
                pics:"pictures/buildings/Upgrades/Counting_House_Bags_of_Coins_Upgrade.png",
                head:"Bags of Coins",
                required:10,
                typeOfUpgrade:['capacity'],
                amountOfUpgrade:[600]
            },{
                name:'moneyChests',
                act:this.props.upgrades[3],
                max:5,
                pics:"pictures/buildings/Upgrades/Counting_House_Money_Chests_Upgrade.png",
                head:"Money Chests",
                required:10,
                typeOfUpgrade:['capacity','prod'],
                amountOfUpgrade:[1000,15]
            }
        ],
        upgrades:[
            [
                {
                    level:1,
                    requirements:[
                        {type:'silver',amount:200},
                        {type:'stone',amount:1}
                    ],
                    gives:"Increases silver capacity of the Counting House +300"
                },
                {
                    level:2,
                    requirements:[
                        {type:'silver',amount:400},
                        {type:'stone',amount:1}
                    ],
                    gives:"Increases silver capacity of the Counting House +600"
                },
                {
                    level:3,
                    requirements:[
                        {type:'silver',amount:600},
                        {type:'stone',amount:1}
                    ],
                    gives:"Increases silver capacity of the Counting House +900"
                },
                {
                    level:4,
                    requirements:[
                        {type:'silver',amount:800},
                        {type:'stone',amount:1}
                    ],
                    gives:"Increases silver capacity of the Counting House +1200"
                },
                {
                    level:5,
                    requirements:[
                        {type:'silver',amount:1000},
                        {type:'stone',amount:1}
                    ],
                    gives:"Increases silver capacity of the Counting House +1500"
                }
            ],
            [
                {
                    level:1,
                    requirements:[
                        {type:'silver',amount:250},
                        {type:'stone',amount:1}
                    ],
                    gives:"gain +30 silver every hour"
                },
                {
                    level:2,
                    requirements:[
                        {type:'silver',amount:500},
                        {type:'stone',amount:1}
                    ],                    
                    gives:"gain +60 silver every hour"
                },
                {
                    level:3,
                    requirements:[
                        {type:'silver',amount:750},
                        {type:'stone',amount:1}
                    ],
                    gives:"gain +90 silver every hour"
                },
                {
                    level:4,
                    requirements:[
                        {type:'silver',amount:1000},
                        {type:'stone',amount:1}
                    ],
                    gives:"gain +120 silver every hour"
                },
                {
                    level:5,
                    requirements:[
                        {type:'silver',amount:1250},
                        {type:'stone',amount:1}
                    ],
                    gives:"gain +150 silver every hour"
                },
                {
                    level:6,
                    requirements:[
                        {type:'silver',amount:1500},
                        {type:'stone',amount:1}
                    ],
                    gives:"gain +180 silver every hour"
                },
                {
                    level:7,
                    requirements:[
                        {type:'silver',amount:1750},
                        {type:'stone',amount:1}
                    ],
                    gives:"gain +210 silver every hour"
                },
                {
                    level:8,
                    requirements:[
                        {type:'silver',amount:2000},
                        {type:'stone',amount:1}
                    ],
                    gives:"gain +240 silver every hour"
                },
                {
                    level:9,
                    requirements:[
                        {type:'silver',amount:2250},
                        {type:'stone',amount:1}
                    ],
                    gives:"gain +270 silver every hour"
                },
                {
                    level:10,
                    requirements:[
                        {type:'silver',amount:2500},
                        {type:'stone',amount:1}
                    ],
                    gives:"gain +300 silver every hour"
                }
            ],[
                {
                    level:1,
                    requirements:[
                        {type:'silver',amount:350},
                        {type:'stone',amount:1}
                    ],
                    gives:"Increases silver capacity of the Counting House +600"
                },
                {
                    level:2,
                    requirements:[
                        {type:'silver',amount:700},
                        {type:'stone',amount:1}
                    ],
                    gives:"Increases silver capacity of the Counting House +1200"
                },
                {
                    level:3,
                    requirements:[
                        {type:'silver',amount:1050},
                        {type:'stone',amount:1}
                    ],
                    gives:"Increases silver capacity of the Counting House +1800"
                },
                {
                    level:4,
                    requirements:[
                        {type:'silver',amount:1400},
                        {type:'stone',amount:1}
                    ],
                    gives:"Increases silver capacity of the Counting House +2400"
                },
                {
                    level:5,
                    requirements:[
                        {type:'silver',amount:1750},
                        {type:'stone',amount:1}
                    ],
                    gives:"Increases silver capacity of the Counting House +3000"
                },

            ],[
                {
                    level:1,
                    requirements:[
                        {type:'gold',amount:5},
                        {type:'silver',amount:1000},
                        {type:'stone',amount:1}
                    ],
                    gives:"Increases silver capacity of the Counting House +1000"
                },
                {
                    level:2,
                    requirements:[
                        {type:'silver',amount:2000},
                        {type:'stone',amount:1}
                    ],
                    gives:"Increases silver capacity of the Counting House +2000"
                },
                {
                    level:3,
                    requirements:[
                        {type:'silver',amount:3000},
                        {type:'stone',amount:1}
                    ],
                    gives:"Increases silver capacity of the Counting House +3000"
                },
                {
                    level:4,
                    requirements:[
                        {type:'silver',amount:4000},
                        {type:'stone',amount:1}
                    ],
                    gives:"Increases silver capacity of the Counting House +4000"
                },
                {
                    level:5,
                    requirements:[
                        {type:'silver',amount:5000},
                        {type:'stone',amount:1}
                    ],
                    gives:"Increases silver capacity of the Counting House +5000"
                },

            ]
        ],
        times:['5:6','6:48','8:30','10:12','11:54','15:18','18:42','23:48','30:36','37:24',
               '47:36','59:30','1:14:0','1:33:30','1:55:36','2:24:30','3:1:54','3:46:6','4:43:54','5:53:36',
               '7:21:0','7:43:30','11:31:54','14:23:36','17:59:30'],
        selected:0,
        upgradeLevel:0,
        capacity:100,
        prod:120,
        incomingUpgrade:"",
        hour:"",
        minute:"",
        sec:"",
        silver:100,
        ev:""
    }
    
    componentDidMount() {
        this.myProduction = setInterval(() => {
            if(this.state.capacity!=this.state.silver){
                this.setState(({ silver }) => ({
                    silver: silver + 1
                })) 
            } else {
                clearInterval(this.newProduction)
            }
        }, 3600000/this.state.prod)
    }
    componentWillUnmount() {
        clearInterval(this.myProduction)
    }
    componentDidUpdate(prevProps,prevState){
        let a=true
        prevProps.upgrades.map((pr,i)=>{
            if(pr!==this.props.upgrades[i]){
                a=false
            }
        })
        if(!a){
            console.log(prevProps.upgrades,this.props.upgrades)
            let capacity=100
            let prod=120
            let upgradeLevel=0
            let newUpgrades=this.state.upgradeTypes
            newUpgrades.map((type,index)=>{
                type.act=this.props.upgrades[index]
                upgradeLevel+=this.props.upgrades[index]
                type.typeOfUpgrade.map((upg,ind)=>{
                    if(upg==='capacity'){
                        capacity+=this.props.upgrades[index]*type.amountOfUpgrade[ind]
                    }
                    if(upg==='prod'){
                        prod+=this.props.upgrades[index]*type.amountOfUpgrade[ind]
                    }
                })
                console.log(this.state.upgradeTypes)
            })
            this.setState({upgradeTypes:newUpgrades,prod:prod,capacity:capacity,upgradeLevel:upgradeLevel})
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
        this.clock(event)
    }
/*Style functions */

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
    document.getElementsByClassName('CountingHouse')[0].classList.add('hidden')
}

/* Event functions */

changeResource=(event)=>{   
    console.log(this.props.upgrades) 
    console.log(event)                      /* Collect silver */
    clearInterval(this.newProduction)
    clearInterval(this.myProduction)
    let collect=[
        {type:'silver',amount:event}
    ]
    this.props.changeResource(collect)
    this.setState({silver:0})
    this.newProduction = setInterval(() => {
        if(this.state.capacity!=this.state.silver){
            this.setState(({ silver }) => ({
                silver: silver + 1
            })) 
        } else {
            clearInterval(this.newProduction)
        }
    }, 3600000/this.state.prod)

}

selectedUpgrade=(event)=>{                  /* Selected upgrade */
    var ii
    this.state.upgradeTypes.filter((t,index)=>{
        if(t.name===event){
            ii=index
        }
        return ii
    })
    this.setState({selected:ii});
}

clock=(event)=>{                               /* Start counting upgrade */
    this.upgradeInterval = setInterval(() => {
        const { sec, minute,hour } = this.state
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
                if(hour!=0){
                    this.setState(({ hour }) => ({
                        hour: hour - 1,
                        minute: 59,
                        sec:59
                    }))  
                } else {
                    console.log(minute,sec)
                    console.log("ting")
                    clearInterval(this.myInterval)
                    document.getElementById("finishUpgrade2").style.display="inline-flex"
                    this.setState({hour:"",minute:"",sec:"",ev:event})
                }
        }
        } 
    }, 1000)
}

finishUpgrade=()=>{                              /* Finishing upgrade on click */
    let a=this.state;
    let event=this.state.ev
    let newVal=a.upgradeTypes
    console.log(event)
    if(newVal[event].act===newVal[event].max){return}
    axios.put('http://localhost:8080/updateUpgrades',{name:document.getElementById('nickName').innerHTML,type:0,row:event})
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
        document.getElementById("finishUpgrade2").style.display="none"
    )
    return
}
    render() {
        const {hour,minute,sec,silver,capacity,prod}=this.state
        return (
            <div className="CountingHouse hidden">
                <div className="countCss">
                    <div onClick={this.closeTab} className="closeButton" >X</div>
                    <div className="buildingTop">
                        <div className="buildingType">
                            <img className="buildImage"
                                 src="/pictures/buildings/CountingHouse.jpg" 
                                 alt="count" 
                                 width="140px" 
                                 height="140px">

                            </img>
                            <div className="nameField">
                                <h3>Counting House</h3>
                                <h5>We're gona be rich!</h5>
                            </div>
                        </div>
                        <div className="production">
                            <ProdSilver changeResource={this.changeResource} silver={silver} capacity={capacity} productionRate={prod}/>
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
                        <div id="finishUpgrade2" style={{display:"none"}}>
                            <p style={{color:"white",margin:"6px"}}>{this.state.incomingUpgrade}</p>
                            <button onClick={this.finishUpgrade} className="finishButton">Finish!</button>
                        </div>
                    </div>
                    <div className="buildingBottom">
                        <CountingUpgrades selectedUpgrade={this.selectedUpgrade} 
                                            upgradeTypes={this.state.upgradeTypes}
                                            upgradeLevel={this.state.upgradeLevel}/>
                        <CountingDetails current={this.state.selected}
                                         upgradeTypes={this.state.upgradeTypes} 
                                         update={this.state.upgrades}
                                         upgrade={this.upgradeBuilding.bind(this)}
                                         upgradeLevel={this.state.upgradeLevel}
                                         timers={this.state.times}
                                         yetUpgrade={this.state.incomingUpgrade}
                                         storage={this.props.storage}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default CountingHouse