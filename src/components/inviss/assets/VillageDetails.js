import React, { Component } from 'react'

export class VillageDetails extends Component {
    setText=()=>{
        let ar=[]
        let a=this.props.current
        let b=this.props.curr[a].act
        let c=this.props.curr[a].max
        let d=this.props.curr[a].required
        if(d>this.props.upgradeLevel){
            console.log(d,this.props.upgradeLevel)
            ar.push(<h2 key="det1" className="headText">{this.props.curr[a].head}</h2>)
            ar.push(<p key="det2">Required {d} other upgrades. (Completed: {this.props.upgradeLevel}/{d})</p>)
            return ar
        } else if(d<=this.props.upgradeLevel){
            if(b>=c){
                return ar
            } else {
                let text=this.props.update[a][b].gives.split('silver')
                if(text.length<2){
                    ar.push(<h2 key="det1" className="headText">{this.props.curr[a].head}</h2>)
                    ar.push(<p key="det2" style={{display:"inline-flex"}}>{text[0]} </p>)
                    ar.push(<p key="det3">Time required: {this.props.timers[this.props.upgradeLevel]}</p>)
                    return ar
                }
                ar.push(<h2 key="det1" className="headText">{this.props.curr[a].head}</h2>)
                ar.push(<p key="det2" style={{display:"inline-flex"}}>{text[0]} <img src='/pictures/SilverIcon.png' alt='Silver' width='20px' height="20px"></img> {text[1]}</p>)
                ar.push(<p key="det3">Time required: {this.props.timers[this.props.upgradeLevel]}</p>)
            }
            return ar
        }
        
    }
    coloring=()=>{
        let a=this.props.current        /*Actual selected upgrde type number */
        let b=this.props.curr[a].act    /*Actual selected upgrade actual level */
        let p=this.props
        let colorcheck=true
        p.update[a][b].requirements.map((rek)=>{
            if(rek.type!='silver'){
                p.storage.filter((st)=>{
                    if(st.type===rek.type){
                        if(st.amount<rek.amount){
                            colorcheck=false
                        }
                    }
                    return colorcheck
                })
            }
            return colorcheck
        })
        return{
            color:colorcheck?'white':'red'
        }
    }
    buttonSee=()=>{
        let p=this.props
        let a=this.props.current        /*Actual selected upgrde type number */
        let b=this.props.curr[a].act    /*Actual selected upgrade actual level */
        let c=this.props.curr[a].max    /*Actual selected upgrade actual level */
        let chack=true
        let check=true
        if(b<c){
            p.update[a][b].requirements.map((rek)=>{
                if(rek.type==='silver'){
                    if(rek.amount>p.storage[0].amount){chack=false}
                } else {
                    p.storage.filter((st)=>{
                        if(st.type===rek.type){
                            if(st.amount<rek.amount){check=false}
                        }
                    })
                }
            })
        }
        return{
            display:p.curr[a].act===p.curr[a].max||
            p.curr[a].required>p.upgradeLevel||
            p.yetUpgrade!=""||
            !chack||!check? "none":"flex"
        }
    }
    add=()=>{
        let sel=this.props.current
        this.props.upgrade(sel)
    }
    upgradeCost=()=>{
        let sel=this.props.current
        let c=[]
        const {act,max}=this.props.curr[sel]
        if(act<max){
            this.props.update[sel].filter(stack=>stack.level===(act+1))[0].requirements.map((re,index)=>{
                if(re.type==="silver"){
                    c.push(<li 
                            style={{color:re.amount>this.props.storage[0].amount?'red':'white'}}
                            key={"req"+index}><p>{re.amount}</p> <img src="pictures/SilverIcon.png" alt="silver" width="25px" height="25px"/></li>)
                } else if (re.type==="gold"){
                    c.push(<li 
                        style={{color:re.amount>this.props.storage[1].amount?'red':'white'}}
                        key={"req"+index}><p>{re.amount}</p> <img src="pictures/GoldIcon.png" alt="silver" width="25px" height="25px"/></li>)

                }
                else {
                    c.push(<li style={this.coloring()}
                        key={"req"+index}
                        >{re.amount} {re.type}</li>)
                }
            })
            return c
        } else {
            return <li>No more<br/> upgrades</li>
        }
    }
    render() {
        return (
            <div className="upgradeDetails">
                <div className="upgradeType">
                    <img src={this.props.curr[this.props.current].pics} 
                        alt="Upgrade"
                        width="120px"
                        height="120px">

                    </img>
                    <div className="upgradeBox">
                        <img src="/pictures/buildings/Upgrades/Upgrade_Icon.png" alt="upgrade"></img>
                        <p style={{display:'inline-flex'}}>
                            <span>{this.props.curr[this.props.current].act}</span>/<span>{this.props.curr[this.props.current].max}</span>
                        </p>
                    </div>
                    <button 
                     className="addButton" 
                     onClick={this.add}
                     style={this.buttonSee()}>
                        <img src="/pictures/buildings/Upgrades/Plus_Icon.png"
                             alt="add"
                             className='addIcon'
                             width="30px"
                             height="30px"
                        ></img>
                        Add
                    </button>
                    <ul className="cost">
                        {this.upgradeCost()}
                    </ul>
                </div>
                <div className="upgradeText">
                    {this.setText()}
                </div>
            </div>
            )
    }
}

export default VillageDetails
