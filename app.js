const express = require('express');
const app = express();

app.get('/health',(req,res)=>{
    res.send({
        "message":"healthy"
    })
})















const PORT = 8080;

app.listen(PORT,function(){
    console.log(`Server started on PORT ${PORT}`)
})