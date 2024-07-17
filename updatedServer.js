const express = require("express")
const mongoose = require("mongoose")
const axios = require("axios")
const app = express()
const port = 8000

const mongoUri = "mongodb+srv://shivangijain:indiA1234@cluster1.i2exfar.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUri).then(()=>{console.log("connected")})
let dataSchema = new mongoose.Schema({
    name: {type: String}
})

let Data = mongoose.model("data", dataSchema)

app.use(express.json())

app.post("/api/data", async (req, res)=>{
    const {data} = req.body
    await new Data({name: data}).save()
    res.send("saved")
})

async function sendData(){
    try{
        let dataSend = "bus-name"
        await axios.post("http://localhost:8000/api/data", {data: dataSend})
    }catch(err){
        console.log(err)
    }
}

sendData()


app.listen(port, ()=>{
    console.log("listening on port")
})
