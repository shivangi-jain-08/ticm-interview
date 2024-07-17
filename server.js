const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = 8000

const mongoUri = "mongodb+srv://shivangijain:indiA1234@cluster1.i2exfar.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUri).then(()=>{console.log("connected")})
let dataSchema = new mongoose.Schema({
    name: {type: String}
})

let Data = mongoose.model("data", dataSchema)

app.post("/api/data", (req, res)=>{
    let data = "bus-name"
    new Data({name: data}).save()
    res.send("saved")
})



app.listen(port, ()=>{
    console.log("listening on port")
})