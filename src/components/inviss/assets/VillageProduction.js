import React, { Component } from 'react'

export class VillageProduction extends Component {
    state={
        completed:1,
        showed:[1,2,3,4,5,6,7,8],
        resources:["Stone","Horse","Iron","Fish","Fur","Smallfolk","Ore","Wood","Cloth","Grains"],
        pictures:[
            "/pictures/buildings/Upgrades/Stone-2.jpg",
            "/pictures/buildings/Upgrades/Horse-2.jpg",
            "/pictures/buildings/Upgrades/Iron-2.jpg",
            "/pictures/buildings/Upgrades/Fish-2.jpg",
            "/pictures/buildings/Upgrades/Fur-2.jpg",
            "/pictures/buildings/Upgrades/Smallfolk-2.jpg",
            "/pictures/buildings/Upgrades/Ore-2.jpg",
            "/pictures/buildings/Upgrades/Wood-2.jpg",
            "/pictures/buildings/Upgrades/Cloth-2.jpg",
            "/pictures/buildings/Upgrades/Grains-2.jpg"
        ],
        actfirst:0,
        clicked:0,
        produce:"",
        minute:"",
        sec:"",
        ev:""
    }
    resStyle=()=>{
        return{
            padding:"1px 0",
            color:"white",
            fontSize: "1.6rem",
            width: "100px",
            textAlign: "center"
        }
    }
    screenAmount=()=>{
        return{
            color:'white',
            position:'relative',
            bottom:'24px',
            left:'73px',
            backgroundColor:'black',
            padding:'3px',
            width:'23px',
            height:'15px',
            textAlign:'center'
        }
    }
    selectResource=(y)=>{
        this.setState({clicked:y})
        this.props.clicked(y)
    }
    canProd=(x)=>{
        return{
            backgroundImage:this.props.prod[x].required==="" ? "linear-gradient(rgb(7, 190, 1), rgb(5, 80, 1))":'',
            border:x===this.state.clicked?"3px solid white":""
        }
    }
    prodButton=(clicked)=>{
        return{
            display:(this.props.prod[clicked].required===""&&
                    this.state.produce==="")?'':'none'
        }
    }
    counter=()=>{
        return{
            height:'30px',
            width:'100%',
            textAlign:'center',
            marginTop:"50px",
        }
    }
    up=()=>{
        let a=this.state.actfirst
        this.setState({actfirst:a-2})
        document.getElementById('villageUp').classList.remove("hidden")
        document.getElementById('villageDown').classList.remove("hidden")
        if(a-2===0){
            document.getElementById('villageUp').classList.add("hidden")
            document.getElementById('villageDown').classList.remove("hidden")
        }
    }
    down=()=>{
        let a=this.state.actfirst
        this.setState({actfirst:a+2})
        document.getElementById('villageDown').classList.remove("hidden")
        document.getElementById('villageUp').classList.remove("hidden")
        if(a+2===this.state.resources.length-8){
            document.getElementById('villageDown').classList.add("hidden")
            document.getElementById('villageUp').classList.remove("hidden")
        }
    }
    startProduce=(z)=>{
        const {minute,sec}=this.props.prod[z].prodTime
        this.setState({produce:z,minute:minute,sec:sec,ev:z})
        this.clock(z)
    }
    clock=(z)=>{
        console.log(z)
        this.prodInterval = setInterval(() => {
            console.log(this.state.minute,this.state.sec)
            const { minute, sec } = this.state
            if (sec != 0) {
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
                    clearInterval(this.prodInterval)
                    document.getElementById("finishVillageProd").style.display="inline-flex"
                    this.setState({minute:"",sec:""})
                }
            } 
        }, 1000)
    }
    finishProduction=()=>{
        let event=this.state.ev
        this.props.finish(event)
        this.setState({ev:"",produce:""})
        document.getElementById("finishVillageProd").style.display="none"
    }

    pstyle=()=>{
        return{
            fontSize:'1.3rem',
            color:'white',
            display:this.state.produce===""||this.state.minute===""?'none':''
        }
    }
    render() {
        let act=this.state.actfirst
        let clicked=this.state.clicked
        return (
            <div className="villageProd">
                <div className="productable">
                    <div className="prodHead">
                        <p className="completed">Completed:{this.state.completed}/10</p>
                        <button id="villageUp" onClick={this.up}
                                className="upButton hidden">
                                <img 
                                src="pictures/buildings/Upgrades/Up.png" 
                                alt="up"
                                ></img></button>
                    </div>
                    <div className="prodRow row1">
                        <div onClick={()=>this.selectResource(act)} style={this.canProd(act)} className="resource res1">
                            <div style={{paddingLeft:"10px"}}>
                                <p style={this.resStyle()}>{this.state.resources[act]}</p>
                                <img src={this.state.pictures[act]} 
                                        width="100px"
                                        height="100px"
                                        style={{margin:"3px"}}></img>
                                <div style={this.screenAmount()}>
                                    {this.props.storage[act+2].amount}
                                </div>
                            </div>
                            <div className="resNeeded">
                                <div style={{display:'flex'}}>
                                    <img src="/pictures/buildings/Upgrades/Time_Icon.png" 
                                            alt="time"
                                            width="23px"
                                            height="23px"></img>
                                    <p>{this.props.prod[act].prodTime.minute}m {this.props.prod[act].prodTime.sec}s</p>
                                </div>
                                <p>{this.props.prod[act].required===""?"":this.props.prod[act].required}</p>
                            </div>
                        </div>
                        <div onClick={()=>this.selectResource(act+1)} style={this.canProd(act+1)} className="resource res2">
                        <div style={{paddingLeft:"10px"}}>
                                <p style={this.resStyle()}>{this.state.resources[act+1]}</p>
                                <img src={this.state.pictures[act+1]} 
                                        width="100px"
                                        height="100px"
                                        style={{margin:"3px"}}></img>
                                <div style={this.screenAmount()}>
                                    {this.props.storage[act+3].amount}
                                </div>
                            </div>
                            <div className="resNeeded">
                            <div style={{display:'flex'}}>
                                    <img src="/pictures/buildings/Upgrades/Time_Icon.png" 
                                            alt="time"
                                            width="23px"
                                            height="23px"></img>
                                    <p>{this.props.prod[act+1].prodTime.minute}m {this.props.prod[act+1].prodTime.sec}s</p>
                                </div>
                                <p>{this.props.prod[act+1].required===""?"":`Required:${this.props.prod[act+1].required}`}</p>
                            </div>
                         
                        </div>
                    </div>
                    <div className="prodRow row2">
                        <div onClick={()=>this.selectResource(act+2)} style={this.canProd(act+2)} className="resource res3">
                        <div style={{paddingLeft:"10px"}}>
                                <p style={this.resStyle()}>{this.state.resources[act+2]}</p>
                                <img src={this.state.pictures[act+2]} 
                                        width="100px"
                                        height="100px"
                                        style={{margin:"3px"}}></img>
                                <div style={this.screenAmount()}>
                                    {this.props.storage[act+4].amount}
                                </div>
                            </div>
                            <div className="resNeeded">
                            <div style={{display:'flex'}}>
                                    <img src="/pictures/buildings/Upgrades/Time_Icon.png" 
                                            alt="time"
                                            width="23px"
                                            height="23px"></img>
                                    <p>{this.props.prod[act+2].prodTime.minute}m {this.props.prod[act+2].prodTime.sec}s</p>
                                </div>
                                <p>{this.props.prod[act+2].required===""?"":`Required:${this.props.prod[act+2].required}`}</p>
                            </div>
                        </div>
                        <div onClick={()=>this.selectResource(act+3)} style={this.canProd(act+3)} className="resource res4">
                        <div style={{paddingLeft:"10px"}}>
                                <p style={this.resStyle()}>{this.state.resources[act+3]}</p>
                                <img src={this.state.pictures[act+3]} 
                                        width="100px"
                                        height="100px"
                                        style={{margin:"3px"}}></img>
                                <div style={this.screenAmount()}>
                                    {this.props.storage[act+5].amount}
                                </div>

                            </div>
                            <div className="resNeeded">
                            <div style={{display:'flex'}}>
                                    <img src="/pictures/buildings/Upgrades/Time_Icon.png" 
                                            alt="time"
                                            width="23px"
                                            height="23px"></img>
                                    <p>{this.props.prod[act+3].prodTime.minute}m {this.props.prod[act+3].prodTime.sec}s</p>
                                </div>
                                <p>{this.props.prod[act+3].required===""?"":`Required:${this.props.prod[act+3].required}`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="prodRow row3">
                        <div onClick={()=>this.selectResource(act+4)} style={this.canProd(act+4)} className="resource res5">
                        <div style={{paddingLeft:"10px"}}>
                                <p style={this.resStyle()}>{this.state.resources[act+4]}</p>
                                <img src={this.state.pictures[act+4]} 
                                        width="100px"
                                        height="100px"
                                        style={{margin:"3px"}}></img>
                                <div style={this.screenAmount()}>
                                    {this.props.storage[act+6].amount}
                                </div>

                            </div>
                            <div className="resNeeded">
                            <div style={{display:'flex'}}>
                                    <img src="/pictures/buildings/Upgrades/Time_Icon.png" 
                                            alt="time"
                                            width="23px"
                                            height="23px"></img>
                                    <p>{this.props.prod[act+4].prodTime.minute}m {this.props.prod[act+4].prodTime.sec}s</p>
                                </div>
                                <p>{this.props.prod[act+4].required===""?"":`Required:${this.props.prod[act+4].required}`}</p>
                            </div>
                        </div>
                        <div onClick={()=>this.selectResource(act+5)} style={this.canProd(act+5)} className="resource res6">
                        <div style={{paddingLeft:"10px"}}>
                                <p style={this.resStyle()}>{this.state.resources[act+5]}</p>
                                <img src={this.state.pictures[act+5]} 
                                        width="100px"
                                        height="100px"
                                        style={{margin:"3px"}}></img>
                                <div style={this.screenAmount()}>
                                    {this.props.storage[act+7].amount}
                                </div>
                            </div>
                            <div className="resNeeded">
                            <div style={{display:'flex'}}>
                                    <img src="/pictures/buildings/Upgrades/Time_Icon.png" 
                                            alt="time"
                                            width="23px"
                                            height="23px"></img>
                                    <p>{this.props.prod[act+5].prodTime.minute}m {this.props.prod[act+5].prodTime.sec}s</p>
                                </div>
                                <p>{this.props.prod[act+5].required===""?"":`Required:${this.props.prod[act+5].required}`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="prodRow row4">
                        <div onClick={()=>this.selectResource(act+6)} style={this.canProd(act+6)} className="resource res7">
                        <div style={{paddingLeft:"10px"}}>
                                <p style={this.resStyle()}>{this.state.resources[act+6]}</p>
                                <img src={this.state.pictures[act+6]} 
                                        width="100px"
                                        height="100px"
                                        style={{margin:"3px"}}></img>
                                <div style={this.screenAmount()}>
                                    {this.props.storage[act+8].amount}
                                </div>
                            </div>
                            <div className="resNeeded">
                            <div style={{display:'flex'}}>
                                    <img src="/pictures/buildings/Upgrades/Time_Icon.png" 
                                            alt="time"
                                            width="23px"
                                            height="23px"></img>
                                    <p>{this.props.prod[act+6].prodTime.minute}m {this.props.prod[act+6].prodTime.sec}s</p>
                                </div>
                                <p>{this.props.prod[act+6].required===""?"":`Required:${this.props.prod[act+6].required}`}</p>
                            </div>
                        </div>
                        <div onClick={()=>this.selectResource(act+7)} style={this.canProd(act+7)} className="resource res8">
                        <div style={{paddingLeft:"10px"}}>
                                <p style={this.resStyle()}>{this.state.resources[act+7]}</p>
                                <img src={this.state.pictures[act+7]} 
                                        width="100px"
                                        height="100px"
                                        style={{margin:"3px"}}></img>
                                <div style={this.screenAmount()}>
                                    {this.props.storage[act+9].amount}
                                </div>
                            </div>
                            <div className="resNeeded">
                            <div style={{display:'flex'}}>
                                    <img src="/pictures/buildings/Upgrades/Time_Icon.png" 
                                            alt="time"
                                            width="23px"
                                            height="23px"></img>
                                    <p>{this.props.prod[act+7].prodTime.minute}m {this.props.prod[act+7].prodTime.sec}s</p>
                                </div>
                                <p>{this.props.prod[act+7].required===""?"":`Required:${this.props.prod[act+7].required}`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="prodBott">
                        <button id="villageDown" 
                                className="upButton"
                                onClick={this.down}><img 
                                src="pictures/buildings/Upgrades/Down.png" 
                                alt="up"
                                ></img></button>
                    </div>

                </div>
                <div className="singleProduct">
                    <div style={this.counter()}>
                        <p id="prodRemaining" style={this.pstyle()}>
        {this.state.resources[this.state.produce]} Remaining time:{this.state.minute}m {this.state.sec}s
                        </p>
                        <button onClick={this.finishProduction} id="finishVillageProd" style={{margin:'0 auto',cursor:'pointer'}} className="finishButton hidden">Finish</button>
                    </div>
                    <div className="resourceDetails">
                        <p style={{
                            color:'white',
                            fontSize:'1.5rem',
                            width:'100%',
                            textAlign:'center',
                            padding:'12px 0'
                        }}>{this.state.resources[clicked]}</p>
                        <div style={{display:'flex'}}>
                            <img style={{marginLeft:'10px'}} src={this.state.pictures[clicked]} alt="image"></img>
                            <div className="icons" style={{color:'white',fontSize:'1.2rem'}}>
                                <p><img src="/pictures/Battle_Icon_2.png"></img>0</p>
                                <p><img src="/pictures/Trade_Icon_2.png"></img>0</p>
                                <p><img src="/pictures/Intrigue_Icon_2.png"></img>0</p>
                            </div>
                        </div>
                        <button onClick={()=>this.startProduce(clicked)} style={this.prodButton(clicked)} className="startProduce">Produce</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default VillageProduction
