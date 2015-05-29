var mongoose = require('./db');

var Schema = mongoose.Schema;

// NOTE: methods must be added to the schema before compiling it with mongoose.model()

/**
	String
	Number
	Date
	Buffer
	Boolean
	Mixed
	ObjectId
	Array
 */

// =========================== Kitty Schema =============================

var kittySchema = new Schema({
    name: String
});

// Instance methods
kittySchema.methods.speak = function () {
	var greeting = this.name
	    ? "Meow name is " + this.name
	    : "I don't have a name"
	 console.log(greeting);
}

// a collection
var Kitten = mongoose.model('Kitten', kittySchema);


// =========================== User Schema =============================

var userSchema = new Schema({
	username: String,
	email: String,
	// if want to Encrypt password, 
	// use [mongoose-bcrypt](https://www.npmjs.com/package/mongoose-bcrypt#encrypting-existing-fields)
	password: String,
	create_at: Number
})

var User = mongoose.model('User', userSchema);

exports.Kitten = Kitten;
exports.User = User;
