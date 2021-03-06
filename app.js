const express=require('express')
const cors=require('cors')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')

dotenv.config()
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const updateStorage=require('./routes/updateStorage')
const updateUpgrades=require('./routes/updateUpgrades')
const silverUpdate=require('./routes/silverUpdate')
const timersUpdate=require('./routes/timersUpdate')
app.use('/updateStorage',updateStorage)
app.use('/updateUpgrades',updateUpgrades)
app.use('/silverUpdate',silverUpdate)
app.use('/timersUpdate',timersUpdate)


mongoose.connect(process.env.DB_CONNECTION,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false
},
  ()=>{
      console.log("CONNECTED DB");
  });



app.listen(8080)