var express = require('express');


var router = express.Router();


// var model = require('./model/team');

var User = require('../model/users');


router.route('/')
	
	// create a user
	.post(function (req, res) {

		var userInfo = {
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
			create_at: new Date().getTime()
		};

		// res.json(userInfo);
		User.create(userInfo, function (err, users) {
			res.json({ 
				data: users ,
				meta: {
					code: 200,
					msg: 'create success'
				}
			});
		})

	})

	// get all users info
	.get(function (req, res) {
		User.all(function(err, users){
			res.json({ 
				data: users ,
				meta: {
					code: 200,
					msg: 'research...'
				}
			});
		});
	}) 

	// get user by id

module.exports = router;
