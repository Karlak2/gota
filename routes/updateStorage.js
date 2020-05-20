const express=require('express');
const router=express.Router()
const Gota=require('../model/Gota')

router.put('/',async(req,res)=>{
    const updateUser=await Gota.findOneAndUpdate({name:req.body.name},{storage:req.body.storage})
    const updatedUser=await Gota.findOne({name:req.body.name})
    console.log(updatedUser.storage)
    res.send({storage:updatedUser.storage})
})

router.post('/',async(req,res)=>{
    const findUser=await Gota.findOne({name:req.body.name})
    if(findUser){
        console.log(findUser)
        res.send({user:findUser.name,storage:findUser.storage})
    } else {
        console.log('New User')
        let st=[
            {type:'silver',amount:40000},
            {type:'gold',amount:100},
            {type:'stone',amount:20},
            {type:'horse',amount:20},
            {type:'iron',amount:20},
            {type:'fish',amount:20},
            {type:'ore',amount:20},
            {type:'wood',amount:20},
            {type:'smallfolk',amount:20},
            {type:'cloth',amount:20},
            {type:'fur',amount:20},
            {type:'grains',amount:20}
        ]
        const newUser= new Gota(
            {
                name:req.body.name,
                storage:st
            })
        await newUser.save()
        console.log(newUser)
        res.send({user:newUser.name,storage:newUser.storage})
    }
    
})



module.exports = router;