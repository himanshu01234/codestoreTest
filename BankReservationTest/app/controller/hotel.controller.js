const TableService = require('../service/hotel.service');

module.exports.createTable = async (req, res) => {
	try {
		const table = await TableService.createTable(req.body);
		res.send({ code: 200, message: 'Table created', data: table });
	} catch (err) {
		res.send({ code: 400, message: 'Internal server error' });
	}
};

module.exports.bookTable = async (req, res) => {
	try {
		req.body.isReserved = true;
		req.body.reservationTime = new Date();
		const table = await TableService.updateTableById(req.body.tableId, req.body);
		res.send({ code: 200, message: 'Table booked', data: table });
	} catch (err) {
		res.send({ code: 400, message: 'Internal server error' });
	}
};

module.exports.getTableList = async (req, res) => {
	try {
		let filter = {};
		let size = 0;
		if (req.query.tableStatus === 'reserved') {
			filter = {
				isReserved: true,
			};
		}
		if (req.query.tableStatus === 'notReserved') {
			filter = {
				isReserved: false,
			};
		}
		if (req.query.size == 'asc') size = 1;
		else if (req.query.size == 'des') size = -1;

		if (req.query.startDate) {
			filter = {
				...filter,
				createdAt: { $gte: req.query.startDate },
			};
		}

		if (req.query.endDate) {
			filter = { ...filter, createdAt: { $lte: req.query.endDate } };
		}

		const table = await TableService.getTableList(filter, size);
		res.send({ code: 200, message: 'Table list', data: table });
	} catch (err) {
		res.send({ code: 400, message: 'Internal server error' });
	}
};

module.exports.tableDetails = async (req, res) => {
	try {
		const table = await TableService.getTableById(req.params.tableId);
		res.send({ code: 200, message: 'Table details', data: table });
	} catch (err) {
		res.send({ code: 400, message: 'Internal server error' });
	}
};

module.exports.cancelBooking = async (req, res) => {
	try {
		req.body.isReserved = false;
		req.body.reservationTime = '';
		req.body.guestName = '';
		const table = await TableService.updateTableById(req.body.tableId, req.body);
		res.send({ code: 200, message: 'Table cancelled', data: table });
	} catch (err) {
		res.send({ code: 400, message: 'Internal server error' });
	}
};
