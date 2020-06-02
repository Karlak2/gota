const express=require('express');
const router=express.Router()
const Gota=require('../model/Gota')

router.put('/',async(req,res)=>{
    const updateUser=await Gota.findOneAndUpdate({name:req.body.name},{storage:req.body.storage,silver:req.body.silver})
    const updatedUser=await Gota.findOne({name:req.body.name})
    console.log(updatedUser.storage)
    res.send({
        storage:updatedUser.storage,
        upgrades:updatedUser.upgrades,
        silver:updatedUser.silver,
        timers:updatedUser.timers
    })
})

router.post('/',async(req,res)=>{
    const findUser=await Gota.findOne({name:req.body.name})
    if(findUser){
        console.log(findUser.silver,"onreload")
        res.send({
            user:findUser.name,
            storage:findUser.storage,
            upgrades:findUser.upgrades,
            timers:findUser.timers,
            silver:findUser.silver
        })
    } else {
        console.log('New User')
        let st=[
            {type:'silver',amount:40000},
            {type:'gold',amount:100},
            {type:'stone',amount:20},
            {type:'horse',amount:20},
            {type:'iron',amount:20},
            {type:'fish',amount:20},
            {type:'fur',amount:20},
            {type:'smallfolk',amount:20},
            {type:'ore',amount:20},
            {type:'wood',amount:20},
            {type:'cloth',amount:20},
            {type:'grains',amount:20}
        ]
        let upgrades=[
            [0,0,0,0],
            [0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ]
        let timers=[
            {building: 'CountingHouse',timer:[false,false],time:[0,0],upgrade:["",0]},
            {building: 'Keep',timer:[false,false],time:[0,0],upgrade:["",0]},
            {building: 'Smithy',timer:[false,false],time:[0,0],upgrade:["",0],prod:""},
            {building: 'VillageCenter',timer:[false,false],time:[0,0],upgrade:["",0],prod:""},
            {building: 'Embassy',timer:[false,false],time:[0,0],upgrade:["",0],prod:""},
            {building: 'Market',timer:[false,false],time:[0,0],upgrade:["",0],prod:""},
            {building: 'Sept',timer:[false,false],time:[0,0],upgrade:["",0],prod:""},
            {building: 'Godswood',timer:[false,false],time:[0,0],upgrade:["",0],prod:""},
            {building: 'RhllorTemple',timer:[false,false],time:[0,0],upgrade:["",0],prod:""},
            {building:'Holdfast',timer:[false,false],time:[0,0],upgrade:["",0],prod:""},
            {building:'Workshop',timer:[false,false],time:[0,0],upgrade:["",0],prod:""},
            {building:'Treasury',timer:[false,false],time:[0,0],upgrade:["",0],prod:""}
        ]
        let silver=100
        const newUser= new Gota(
            {
                name:req.body.name,
                storage:st,
                upgrades:upgrades,
                timers:timers,
                silver:silver
            })
        await newUser.save()
        console.log(newUser)
        res.send({
            user:newUser.name,
            storage:newUser.storage,
            upgrades:newUser.upgrades,
            timers:newUser.timers,
            silver:newUser.silver
        })
    }
    
})



module.exports = router;