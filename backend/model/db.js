// db
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodetest1');

var db = mongoose.connection; 

db.on('error', function(err){
	console.log('connection err:', err);
});

db.once('open', function(callback) {
	console.log('db connect');
});

module.exports = mongoose;

// BRING IN YOUR SCHEMAS & MODELS // For example 
// require('./../model/team'); 