
const { getCharById } = require('./controllers/getCharById') 

const http = require('http')

http
.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if(req.url.includes("/rickandmorty/character")){
        let id = req.url.split('/')
        getCharById(res,req.url.split('/').at(-1))
    }

    else {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("Error 404")
    }
})
.listen(3001)


// const express = require('express')
// const server = express()

// server.listen(3001)