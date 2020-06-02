import React, { Component } from 'react'
import Head from './Head';
import Bottom from './Bottom';
import Invisible from './Invisible';
import Character from './Character';
import axios from 'axios';


export class Page extends Component {
    constructor (){
        super()
        this.state={
            title:'Lord',
            characterStats:
                {battle:0,
                trade:0,
                intrigue:0}
            ,
            storage:[
             /*goods*/ 
             {type:'silver',amount:0},
             {type:'gold',amount:0},
             {type:'stone',amount:0},
             {type:'horse',amount:0},
             {type:'iron',amount:0},
             {type:'fish',amount:0},
             {type:'fur',amount:0},
             {type:'smallfolk',amount:0},
             {type:'ore',amount:0},
             {type:'wood',amount:0},
             {type:'cloth',amount:0},
             {type:'grains',amount:0}
            ],
            upgrades:[
                [0,0,0,0],
                [0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0]
            ],
            updated:false,
            name:"",
            timers:[
                {building: 'CountingHouse',timer:[false,false],time:[0,0],upgrade:["",0]},
                {building: 'Keep',timer:[false,false],time:[0,0],upgrade:["",0]},
                {building: 'Smithy',timer:[false,false],time:[0,0],upgrade:["",0],prod:""},
                {building: 'VillageCenter',timer:[false,false],time:[0,0],upgrade:["",0],prod:""},
                {building: 'Embassy',timer:[false,false],time:[0,0],upgrade:["",0],prod:""},
                {building: 'Market',timer:[false,false],time:[0,0],upgrade:["",0],prod:""},
                {building: 'Sept',timer:[false,false],time:[0,0],upgrade:["",0],prod:""},
                {building: 'Godswood',timer:[false,false],time:[0,0],upgrade:["",0],prod:""},
                {building: 'RhllorTemple',timer:[false,false],time:[0,0],upgrade:["",0],prod:""},
                {building:'Holdfast',timer:[false,false],time:[0,0],upgrade:["",0],prod:""},
                {building:'Workshop',timer:[false,false],time:[0,0],upgrade:["",0],prod:""},
                {building:'Treasury',timer:[false,false],time:[0,0],upgrade:["",0],prod:""}
                    ],
            silver:100
        }
}
componentDidMount(){
    this.check=setInterval(() => {
        if(this.state.updated){
            axios.put('http://localhost:8080/updateStorage',{'storage':this.state.storage,'name':this.state.name,silver:this.state.silver})
            .then(res=>this.setState({
                storage:res.data.storage,
                upgrades:res.data.upgrades,
                silver:res.data.silver,
                timers:res.data.timers
            }))
            .catch(err=>{
                console.log(err)
            })
            this.setState({updated:false})
        }
    }, 1000)
}

loginScreen=()=>{
    return{
        marginTop:'-276px',
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor:'#2980b9',
        zIndex:'10'
    }
}

login=()=>{
    let nickname=document.getElementById('loginName').value
    axios.post('http://localhost:8080/updateStorage',{name:nickname})
    .then(res=>{ this.setState({
        name:res.data.user,
        storage:res.data.storage,
        upgrades:res.data.upgrades,
        timers:res.data.timers,
        silver:res.data.silver
    })
    }
    ).catch((err)=>console.log(err))
    .finally(document.getElementById('loginscreen').classList.add('hidden'))
}

    changeResource=(event)=>{
        console.log(event)
        let st=this.state.storage
        let k=false
        st.map(j=>{
            event.map(row=>{
                if(j.type===row.type){
                    j.amount=j.amount+row.amount
                    if(row.type==='silver'&&row.amount>0){
                        k=true
                    }
                }
            })
        })
        console.log(k,"A valtozo")
        if(!k){
            this.setState({storage:st,updated:true})
        } else {
            this.setState({storage:st,updated:true,silver:0})   
        }
    }
change=()=>{
    this.setState({updated:true})
}
count=()=>{
        this.setState(({ silver }) => ({
            silver: silver + 1,
            updated:true
        })) 
    axios.put('http://localhost:8080/silverUpdate',{
        name:this.state.name,silver:this.state.silver
    })

    
}

render() {
        return (
            <React.Fragment>
                <div className="page">
                    <Head name={this.state.name} storage={this.state.storage}/>
                    <Character stats={this.state.characterStats}/>
                    <Invisible storage={this.state.storage}
                            changeResource={this.changeResource}
                            upgrades={this.state.upgrades}
                            change={this.change}
                            timers={this.state.timers}
                            count={this.count}
                            silver={this.state.silver}
                            name={this.state.name}
                            title={this.state.title}
                            stats={this.state.characterStats}
                            />
                    <Bottom 
                            upgrades={this.state.upgrades}
                            timers={this.state.timers}/>
                </div>
                <div id="loginscreen" style={this.loginScreen()}>
                    <div className='login'>
                        <input id="loginName" placeholder='Type a nickname'></input>
                        <button onClick={this.login}>Start game</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Page
