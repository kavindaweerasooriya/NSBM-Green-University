const express = require('express');
const app = express();
const cookiesession = require("cookie-session");


app.use(express.json());

app.get('/health',(req,res)=>{
    res.send({
        "message":"healthy"
    })
})

 
app.use(cookiesession({
    name:"session",
    maxAge:3600,
    keys:["key"]
}))


app.use(require("./routes/user.routes"))







const PORT = 8080;

app.listen(PORT,function(){
    console.log(`Server started on PORT ${PORT}`)
})