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
            storage:[
             /*goods*/ 
             {type:'silver',amount:0},
             {type:'gold',amount:0},
             {type:'stone',amount:0},
             {type:'horse',amount:0},
             {type:'iron',amount:0},
             {type:'fish',amount:0},
             {type:'ore',amount:0},
             {type:'wood',amount:0},
             {type:'smallfolk',amount:0},
             {type:'cloth',amount:0},
             {type:'fur',amount:0},
             {type:'grains',amount:0}
            ],
            updated:false,
            name:""  
        }
}
componentDidMount(){
    this.check=setInterval(() => {
        if(this.state.updated){
            axios.put('http://localhost:8080/updateStorage',{'storage':this.state.storage,'name':this.state.name})
            .then(res=>this.setState({storage:res.data.storage}))
            .catch(err=>{
                console.log(err)
            })
            this.setState({updated:false})
        }
    }, 1000)
}
// componentDidUpdate(prevProps,prevState){
//     console.log(prevState.storage,this.state.storage)
//     if(prevState.storage[0].amount!==this.state.storage[0].amount){
//         console.log(this.state.storage[0].amount)
//         // axios.get('http://localhost:8080/sil')
//         // .then(res=>console.log(res))
//         // .catch(err=>console.log(err))
//     }
// }

loginScreen=()=>{
    return{
        marginTop:'-76px',
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
    .then(res=>{ this.setState({name:res.data.user,storage:res.data.storage})
    }
    ).catch((err)=>console.log(err))
    .finally(document.getElementById('loginscreen').classList.add('hidden'))
}

    changeResource=(event)=>{
        console.log(event)
        let st=this.state.storage
        st.map(j=>{
            event.map(row=>{
                if(j.type===row.type){
                    j.amount=j.amount+row.amount
                }
            })
        })
        this.setState({storage:st,updated:true})
    }
    render() {
        return (
            <React.Fragment>
                <div className="page">
                    <Head name={this.state.name} storage={this.state.storage}/>
                    <Character/>
                    <Invisible storage={this.state.storage}
                            changeResource={this.changeResource}/>
                    <Bottom />
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
