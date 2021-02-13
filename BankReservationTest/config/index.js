var env = process.env.NODE_ENV || 'local';

var config = {
	local: {
		port: 3002,
	},
};

module.exports = config[env];
