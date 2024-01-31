const http =require('http');

const fs=require('fs')

const index=fs.readFileSync('index.html','utf-8')
const data=fs.readFileSync('data.json','utf-8')


const server=http.createServer((req,res)=>{
    switch(req.url){
        case '/': res.setHeader('Content-Type','text/html');
        res.end(index);
        break;
        case '/api':res.setHeader('Content-Type','application/json')
        res.end(data);
        break;
        default:
            res.writeHead(404,'Page Not Found');
            res.end();


    }
    // console.log(req.url)
    // console.log('Server Started')
    // res.setHeader('Dummy','DummyValue')
    // res.setHeader('Content-Type','text/html')
   
})

server.listen(8080);