var path = require('path');

module.exports = function (mongoose) {
	var userType;

	userType = new mongoose.Schema({
		name: { type: String, required: true },
		description: { type: String, required: true },
		imageUrl: { type: String, required: true }
	});

	return mongoose.model(path.basename(module.filename, '.js'), userType);
};