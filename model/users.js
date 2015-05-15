/**
 *  @author asjmtz
 *  @description Model for User
 */

var mongoose = require('./db');

// 加密解密
var crypto = require('crypto');
var hash = function(password) {
  return crypto.createHash('sha1').update(password).digest('base64')
}

var userSchema = new mongoose.Schema({
	username: String,
	email: String,
	// if want to Encrypt password, 
	// use [mongoose-bcrypt](https://www.npmjs.com/package/mongoose-bcrypt#encrypting-existing-fields)
	password: String,
	create_at: Number
});

var User = mongoose.model('User', userSchema);


exports.create = function (obj, callback) {

	// res.json( req.body );
	var user = new User(obj);

	user.save(function (err, user) {
		callback(err, { 
			data: user ,
			meta: {
				code: 200,
				msg: ''
			}
		});		
	});
}

/**
 * 查询用户
 * @param  {obj}   query   { id: 11, username: 'a'} 以键值的形式查询，优先id
 * @param  {Function} callback 回调函数
 */
exports.get = function ( query, callback ) {
	User.find(query, callback);
}

/**
 * 查询所有用户
 * @param  {Function} callback 回调函数
 */
exports.all = function (callback) {
	User.find( callback );
}



exports.User = User;