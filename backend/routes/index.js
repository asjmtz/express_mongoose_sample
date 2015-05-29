var express = require('express');
var router = express.Router();

// Route middleware 
// we wanted something to happen every time a request was sent to our API
router.use(function (req, res, next) {
	console.log('hello index');
	next();
})

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Express' });
	// var db = req.db;
 //  	var collection = db.get('usercollection');
 //  	collection.find({}, {}, function (err, docs) {
 //  		console.log(docs);
 //  		res.render('userlist', {
 //            "userlist" : docs
 //        });
 //  	})

});

module.exports = router;
