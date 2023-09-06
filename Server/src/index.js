const { start } = require('repl');
const data = require('./utils/data') 

const http = require('http')

http
.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")){
        let id = req.url.split('/').at(-1)
        let character = data.find((element)=>{return element.id === Number(id)})
        
        res.writeHead(200,{"Content-type":"application/json"})
        return res.end(JSON.stringify(character))
    }

    else {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("Error 404")
    }
})
.listen(3001)
