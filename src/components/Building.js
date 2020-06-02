import React, { Component } from 'react'

export class Building extends Component {
    state={
        hour:"",
        minute:"",
        sec:"",
        idleOrNot:'Idle'
    }
    componentDidUpdate(prevProps,prevState){
        if(this.props.timers[this.props.buildingId-1].timer[0]!=prevProps.timers[this.props.buildingId-1].timer[0]){
            console.log(this.props.timers[this.props.buildingId-1].timer[0],prevProps.timers[this.props.buildingId-1].timer[0])
            this.timeSignal()
            if(this.props.timers[this.props.buildingId-1].timer[0]&&this.props.timers[this.props.buildingId-1].timer[1]){
                this.setState({idleOrNot:'Upgrade'})
            } else if(this.props.timers[this.props.buildingId-1].timer[1]){
                this.setState({idleOrNot:'Producton'})
            } else if(this.props.timers[this.props.buildingId-1].timer[0]){
                this.setState({idleOrNot:'Upgrade'})
            } else {
                this.setState({idleOrNot:'Idle'})
            }
    
        }
    }
    onEvent=()=>{
            document.getElementsByClassName(this.props.source)[0].classList.remove('hidden')
            let x=this.props.buildingId
            return this.props.onChange(x)
    }
    sumlevel=()=>{
        return{
            position:'relative',
            color:'white',
            left:'85px',
            top:'10px',
            backgroundColor:'black',
            width:'20px',
            textAlign:'center',
            padding:'5px',
            borderRadius:'50%',
            fontSize:'1.2rem',
            display:this.props.buildingId===2?'none':''
        }
    }
    kijelzo=()=>{
        return{
            backgroundColor:'black',
            padding:'5px',
            borderRadius:'10px',
            textAlign:'center',
            fontWeight:'700',
            marginTop:'15px',
            fontSize:'1.2rem',
            color:'white',
            display:this.state.hour>0||this.state.minute>0||this.state.sec>0?'':'none'
        }
    }
    finish=()=>{
        return{
            backgroundColor:'yellow',
            padding:'5px',
            borderRadius:'10px',
            textAlign:'center',
            marginTop:'15px',
            fontSize:'1.1rem',
            color:'black',
            fontWeight:'700',
            display:this.state.hour===0&&this.state.minute===0&&this.state.sec===0?'':'none'
        }
    }
    idleOrNot=()=>{
        return{
            position:'relative',
            top:'20px',
            color:'white',
            backgroundColor:'black',
            padding:'5px',
            borderRadius:'10px',
            textAlign:'center',
        }
    }
    sumOfLevels=()=>{
        let sum=0;
        let upgrades=this.props.upgrades[this.props.buildingId-1]
        upgrades.map(upg=>sum=sum+upg)
        return sum
    }
    timeSignal=()=>{
        if(this.props.timers[this.props.buildingId-1].timer[0]){
            let hour,sec,minute
            let time=this.props.timers[this.props.buildingId-1].time[0]+1
            let delta=time-Math.floor(Date.now()/1000)
            if(delta>=0){
                delta=delta-1
                hour=Math.floor(delta/3600)
                minute=Math.floor((delta-3600*hour)/60)
                sec=delta-3600*hour-60*minute
            } else {
                hour=minute=sec=0
            }
            this.setState({hour:hour,minute:minute,sec:sec})
            if(hour>0||minute>0||sec>0){
                this.clock()
            }
        } else {
            this.setState({hour:"",minute:"",sec:""})
            return
        }
    }
    sendMessage=()=>{
        let {hour,minute,sec}=this.state
        if(this.props.buildingId===2){
            return
        } else {
            return<React.Fragment><p style={this.kijelzo()}>{hour===0?``:`${hour}h`} {`${minute}m`} {`${sec}s`}</p>
            <p style={this.finish()}>Finish</p></React.Fragment>

        }
    }
    clock=()=>{                               /* Start counting upgrade */
        this.upgradeVillageInterval = setInterval(() => {
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
                        clearInterval(this.upgradeVillageInterval)
                    }
                }
            } 
        }, 1000)
    }
    
    render() {
        return (
            <div onClick={()=>this.onEvent()} className={`simpleBuilding ${this.props.source}Bottom`}>
                <p style={this.idleOrNot()}>{this.state.idleOrNot}</p>
                <img src={`/pictures/buildings/${this.props.source}.jpg`} alt="building" width="105px" height="105px"/>
                <p style={this.sumlevel()}>{this.sumOfLevels()}</p>
                {this.sendMessage()}
            </div>
        );
    }
}


export default Building
