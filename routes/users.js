var express = require('express');


var router = express.Router();


// var model = require('./model/team');

var model = require('../model/team');

var User = model.User;

router.route('/')
	
	// create a user
	.post(function (req, res) {

		// res.json( req.body );
		var user = new User({
			username: req.body.name,
			email: req.body.email,
			password: req.body.password,
			create_at: new Date().getTime()
		});

		user.save(function (err, user) {

			if (err) { res.send(err) };
			
			res.json({ 
				data: user ,
				meta: {
					code: 200,
					msg: ''
				}
			});
		})

	})

	// get all users info
	.get(function (req, res) {

		User.find(function (err, users) {
			var resJson ;
			if (err) { 
				resJson = {
					meta: {
						code: 404,
						msg:''
					},
					data:{}
				} 
			} else {
				resJson = {
					meta: {
						code: 200,
						msg:''
					},
					data: users
				} 
			}


			res.json( resJson );
		})


	}) 



module.exports = router;
