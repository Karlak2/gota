const express=require('express');
const router=express.Router()
const Gota=require('../model/Gota')

router.put('/',async(req,res)=>{
    let d=req.body.data
    let findUser=await Gota.findOne({name:d.name})
    let newtimers=findUser.timers
    newtimers.map(build=>{
        if(build.building===d.building){
            if(d.type==="upgrade"){
                build.timer[0]=d.timer,
                build.time[0]=d.time,
                build.upgrade=d.upgrade
            } else if(d.type==='production'){
                build.timer[1]=d.timer,
                build.time[1]=d.time,
                build.prod=d.prod
            }
        }
    })
    console.log(findUser.timers[0],"itt")
    let updateUser=await Gota.findOneAndUpdate({name:d.name},{timers:newtimers})
    let updatedUser=await Gota.findOne({name:d.name})
    console.log(updatedUser.timers[0],"db")
    res.send({message:"Success update"})
})


module.exports = router;