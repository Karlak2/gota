const express=require('express')
const cors=require('cors')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const Gota=require('./model/Gota')

dotenv.config()
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const updateStorage=require('./routes/updateStorage')
app.use('/updateStorage',updateStorage)


mongoose.connect(process.env.DB_CONNECTION,{
  useNewUrlParser: true,
  useUnifiedTopology: true
},
  ()=>{
      console.log("CONNECTED DB");
  });



app.listen(8080)