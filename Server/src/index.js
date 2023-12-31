const {router} = require('./routes/index.js')
const express = require('express')
const server = express()
const PORT = 3001
const morgan = require('morgan')
const {sequelize} = require('./DB_connection.js')



server.use(express.json()) //Pasa lo que me llega como json a JS
server.use(morgan('dev'))
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});
 
server.use('/rickandmorty',router)

server.listen(PORT,()=>{
   sequelize.sync({force: true});
   console.log(`Sever rised in por ${PORT}`)
})