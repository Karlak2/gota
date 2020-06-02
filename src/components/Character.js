import React, { Component } from 'react'

export class Character extends Component {
    picStyle=()=>{
        return{
            borderRadius:'50%',
            margin:'8px',
            cursor:'pointer'
        }
    }
    openchar=()=>{
        console.log('open')
        document.getElementsByClassName('Storage')[0].classList.remove('hidden')
    }
    render() {
        return (
            <div className="charDisplay">
                <div onClick={()=>this.openchar()} className="characterImage">
                    <img style={this.picStyle()} src="/pictures/Male-Bald_01.jpg" alt="circle" width="115px" height="115px"></img>
                </div>
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
        )
    }
}

export default Character
