import express from 'express'
const app = express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({'message':'ok'})
})
app.listen(3000,()=>{
    console.log("server is listening at the port 3000 \n http://localhost:3000")
})