const fs=require('fs')


// const index=fs.readFileSync('index.html','utf-8')
const data=fs.readFileSync('data.json','utf-8')
 const products=JSON.parse(data)

const express =require('express');
//const { type } = require('os');
const server=express();
// server.get('/',(req,res)=>{
//     res.send('<h1>Hello World</h1>')
//     res.sendFile('E:/Backend_Learning/index.html')
//    res.json(products)
//    res.sendStatus(404);
//    res.status(202).send('<h1>Own Status</h1>')


// })

// server.get('/demo',(req,res)=>{

// })


// server.use((req,res,next)=>{
    
//     console.log(req.method,req.ip,req.hostname,req.get('User-Agent'))
//     next();
// })
const auth=(req,res,next)=>{
    if (req.query.password=='123') {
        next();
        
    } else {
        res.send(401);
    }
}

server.get('/',auth,(req,res)=>{
    res.json({type:'GET'})
    //console.log(req.header)
})
server.put('/',auth,(req,res)=>{
    res.json({type:'PUT'})
})
server.post('/',(req,res)=>{
    res.json({type:'POST'})
})
server.delete('/',(req,res)=>{
    res.json({type:'DELETE'})
})
server.patch('/',(req,res)=>{
    res.json({type:'PATCH'})
})




server.listen(8000,()=>{
    console.log('Server Started')
})