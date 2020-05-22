const express=require('express');
const router=express.Router()
const Gota=require('../model/Gota')

router.put('/',async(req,res)=>{
    const updatedUser=await Gota.findOneAndUpdate({name:req.body.name},{silver:req.body.silver})
    console.log(updatedUser.silver)
    res.send({message:'silver updated'})
})




module.exports = router;