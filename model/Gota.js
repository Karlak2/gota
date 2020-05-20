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
    }
})

module.exports=mongoose.model('gota',gotaSchema)