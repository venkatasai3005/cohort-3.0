const express = require("express");
const app = express()
app.use(express.json)
const users=[{
    name:"john",
    kidneys:[{
        healthy:true
    },{
        healthy:false
    }]
}]
app.get("/",function(req,res){
    const johnKidneys=users[0].kidneys
    const numberofkidneys=johnKidneys.length
    let numberofhealthykidneys=0
    for(let i=0;i<numberofkidneys;i++){
        if(johnKidneys[i].healthy){
            numberofhealthykidneys++
        }
    }
    const numberofunhealthykidneys=numberofkidneys-numberofhealthykidneys

    res.json({
        numberofkidneys,
        numberofhealthykidneys,
        numberofunhealthykidneys
    })
})
app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy
    users[0].kidneys.push({
        healthy:isHealthy
    })
    app.json(
        {
            msg:"Done!"
        }
    )
})

app.listen(3000)