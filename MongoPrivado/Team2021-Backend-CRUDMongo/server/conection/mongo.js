'use strict';

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// user set constiables
// user set constiables
const mongoHost1 = process.env.MONGO_HOST1 || '34dcc78c-0c59-47f9-a599-5bd0db303d07-0.budepemd0im5pmu4u60g.private.databases.appdomain.cloud';
const mongoHost2 = process.env.MONGO_HOST2 || '34dcc78c-0c59-47f9-a599-5bd0db303d07-1.budepemd0im5pmu4u60g.private.databases.appdomain.cloud';
const mongoHost3 = process.env.MONGO_HOST3 || '34dcc78c-0c59-47f9-a599-5bd0db303d07-2.budepemd0im5pmu4u60g.private.databases.appdomain.cloud';
const mongoUser = process.env.MONGO_USER || 'ibm_cloud_f8e4cbb9_de31_403c_aad0_dbe0fc07431e';
const mongoPass = process.env.MONGO_PASS || '3cf5ec486a8b80c85f7cdf0688ae011cde91d8230ddc4dd097380254a0ca89d1';
const mongoDBName = process.env.MONGO_DB_NAME || 'ibmclouddb';
const mongoSSL = process.env.MONGO_SSL || '--sslCAFile 7cf7953e-9946-4392-9e1b-b577d67d9005';


module.exports = function(app){

	// set up other middleware
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	  });
	
	var ca = [require('fs').readFileSync(__dirname + "/7cf7953e-9946-4392-9e1b-b577d67d9005")];
	
	const options = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		poolSize: 1,
		reconnectTries: 1,
		ssl: true,
		sslValidate:true,
		sslCA: ca
	};

	// connect to the MongoDB
	let mongoConnect = 'mongodb://127.0.0.1:31135';
	if (mongoHost1 !== '' && mongoHost2 !== '' && mongoHost3 !== '' && mongoUser !== '' && mongoPass != '') {
  		mongoConnect = `mongodb://${mongoUser}:${mongoPass}@${mongoHost1}:31135,${mongoHost2}:31135,${mongoHost3}:31135/${mongoDBName}?authSource=admin&replicaSet=replset`;
	} else if (mongoURL !== '') {
  		mongoConnect = `mongodb://${mongoURL}/${mongoDBName}`;
	}

	
	mongoose.Promise = global.Promise;
	mongoose.connect(mongoConnect, options)
  		.catch((err) => {
    		if (err) console.error(err); 
  	});

	var db = mongoose.connection;
	db.on('error', (error) => {
        console.error(error);
	});

	var sess = {
	  store: new MongoStore({ mongooseConnection: mongoose.connection }),
	  name: 'mean example',
	  secret: 'ninpocho',
	  resave: false,
	  saveUninitialized: true,
	  cookie: {}
	};

	app.use(session(sess));

	console.info('Connection established with mongodb');
	console.info(`Connection details: ${mongoConnect}`);
};

