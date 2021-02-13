const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
if (process.env.NODE_ENV == 'local') {
	mongoose
		.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
		.then(() => {
			console.log('Successfully connected to the database');
		})
		.catch((err) => {
			console.log(err);
			console.log('Could not connect to the database. Exiting now...');
			process.exit(); // to close app Completely
		});
}
