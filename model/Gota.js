const mongoose=require('mongoose')

const gotaSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    storage:{
        type:Array,
        require:true
    },
    upgrades:{
        type:Array,
        require:true
    },
    timers:{
        type:Array,
        require:true
    },
    silver:{
        type:Number,
        require:true
    }
})

module.exports=mongoose.model('gota',gotaSchema)