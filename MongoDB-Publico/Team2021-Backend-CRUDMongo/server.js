
const appName = require('./package.json').name;
const http = require('http');
const express = require('express');
const localConfig = require('./server/config/local.json'); 
const morgan = require('morgan');
const cors = require('cors');


const app = express();
const router = require('./server/routers/index');
const conection = require('./server/conection/mongo');
conection(app);
router(app);

//app.use(morgan());
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Imprimir en el navegador (localhost:8080/api/customers)
/*app.get ('/', function (req, res) { 
  res.send (router(app)) 
})*/



const server = http.createServer(app);
const port = process.env.PORT || localConfig.port;
server.listen(port, function(){
  
});

module.exports = server;