import React, { Component } from 'react'

export class Storage extends Component {
    state={
        selected:'equipment'
    }
    picsStyle=()=>{
        return{
            margin:'10px',
            border:'2px solid black'
        }
    }
    buttons=()=>{
        return{
            cursor:'pointer',
            backgroundColor:'rgb(255, 204, 73)',
            padding:'20px 40px',
            color:'black',
            border:'1px solid black',
            margin:'10px',
            fontSize:'1.5rem',
            borderRadius:'15px'
        }
    }
    eqd=()=>{
        return{
            marginLeft:"150px",
            padding:"5px",
            width:"525px"
        }
    }
    screen=()=>{
        return{
            backgroundColor:'black',
            padding:'10px',
            borderRadius:'15px'
        }
    }
    closeTab=()=>{
        document.getElementsByClassName('Storage')[0].classList.add('hidden')
    }
    showAndHide=(x)=>{
        document.getElementsByClassName(this.state.selected)[0].classList.add('hidden')
        document.getElementsByClassName(x)[0].classList.remove('hidden')
        this.setState({selected:x})
    }
    render() {
        return (
            <div className="Storage InvisibleTemp hidden">
                <div className="countCss">
                    <div onClick={this.closeTab} className="closeButton" >X</div>
                    <div className="charHead">Your Character</div>
                    <div className="selectCharacter">
                        <div onClick={()=>this.showAndHide('equipment')} style={{display:'flex'}}>
                            <img src="/pictures/Body_Icon.png" alt='body' width="40px" height="39px"></img>
                            <p>Equipment</p>
                        </div>
                        <div onClick={()=>this.showAndHide('character')} style={{display:'flex'}}>
                            <img src="/pictures/Background_Hedge_Knight_Icon.png" alt='body' width="40px" height="39px"></img>
                            <p>Character</p>
                        </div>
                        <div onClick={()=>this.showAndHide('pactsandpower')} style={{display:'flex'}}>
                            <img src="/pictures/Diplomacy_Pacts_Icon.png" alt='body' width="40px" height="39px"></img>
                            <p>Pacts & power</p>
                        </div>
                        <div onClick={()=>this.showAndHide('stats')} style={{display:'flex'}}>
                            <img src="/pictures/Stats.png" alt='body' width="40px" height="39px"></img>
                            <p>Stats</p>
                        </div>
                        <div onClick={()=>this.showAndHide('achies')} style={{display:'flex'}}>
                            <img src="/pictures/Background_Fosterling_Icon.png" alt='body' width="40px" height="39px"></img>
                            <p>Achievements</p>
                        </div>
                    </div>
                    <div className="equipment template">
                        <div className='eq-main'>
                            <div style={this.screen()}>
                                <p>{this.props.title} {this.props.name}</p>
                                <div style={{display:'flex'}}>
                                    <img style={this.picsStyle()} src="/pictures/Male-Bald_01.jpg" alt="circle" width="200px" height="200px"></img>
                                    <div style={{marginTop:'10px'}} className='characterStats'>
                                        <div style={{display:'flex'}}>
                                            <img src="/pictures/Battle_Icon_2.png" width="30px" height="29px"></img>
                                            <p>{this.props.stats.battle}</p>
                                        </div>
                                        <div style={{display:'flex',margin:'13px 0'}}>
                                            <img src="/pictures/Trade_Icon_2.png" width="30px" height="29px"></img>
                                            <p>{this.props.stats.trade}</p>
                                        </div>
                                        <div style={{display:'flex'}}>
                                            <img src="/pictures/Intrigue_Icon_2.png" width="30px" height="29px"></img>
                                            <p>{this.props.stats.intrigue}</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{display:'flex',margin:'20px 0'}}>
                                    <div style={this.buttons()}>Talents</div>
                                    <div style={this.buttons()}>Storage</div>
                                </div>
                            </div>
                            <div style={this.eqd()}>
                                <div className="eqdescription">
                                    <p style={{textTransform:'uppercase'}}>Equipment bonus</p>
                                    <div className="bonus">
                                        <hr/>
                                        <div style={{display:'flex'}}>
                                            <img src="/pictures/Hand_Icon_Lg.png" width="35px" height="35px"></img>
                                            <p>No equipment in hand slot</p>
                                        </div>
                                    </div>
                                    <div className="bonus">
                                        <hr/>
                                        <div style={{display:'flex'}}>
                                            <img src="/pictures/Body_Icon.png" width="35px" height="35px"></img>
                                            <p>No equipment in armor slot</p>
                                        </div>
                                    </div>
                                    <div className="bonus">
                                        <hr/>
                                        <div style={{display:'flex'}}>
                                            <img src="/pictures/Companion_Icon.png" width="35px" height="35px"></img>
                                            <p>No equipment in companion slot</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='equips' style={{display:'flex'}}>
                                    <img src="/pictures/Item_Hand_Icon.png" width="100px" height="100px"></img>
                                    <img src="/pictures/Item_Body_Icon.png" width="100px" height="100px"></img>
                                    <img src="/pictures/Item_Companion_Icon.png" width="100px" height="100px"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="character template hidden" >char</div>
                    <div className="pactsandpower template hidden">pacts</div>
                    <div className="stats template hidden">stats</div>
                    <div className="achies template hidden">achies</div>
                </div>
            </div>
        )
    }
}

export default Storage
