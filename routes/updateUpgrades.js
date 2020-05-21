const express=require('express');
const router=express.Router()
const Gota=require('../model/Gota')

router.get('/',async(req,res)=>{
    const findUser=await Gota.findOne({name:req.body.name})
    console.log(findUser.upgrades)
    res.send({upgrades:findUser.upgrades})
})

router.put('/',async(req,res)=>{
    const {type,row}=req.body
    const findUser=await Gota.findOne({name:req.body.name})
    findUser.upgrades[type][row]+=1
    console.log(findUser.upgrades[type][row])
    const updateUser=await Gota.findOneAndUpdate({name:req.body.name},{upgrades:findUser.upgrades})
    res.send({suc:true})
})



module.exports = router;