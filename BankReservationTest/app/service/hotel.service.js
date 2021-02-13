const Table = require('../model/hotel.model');

const createTable = async (body) => {
	return await Table.create(body);
};

const getTableById = async (id) => {
	return await Table.findById(id);
};

const getTableList = async (filter, size) => {
	if (size) return await Table.find(filter).sort({ sitsNo: size });
	else return await Table.find(filter);
};

const updateTableById = async (tableId, updateBody) => {
	try {
		const table = await getTableById(tableId);

		Object.assign(table, updateBody);
		await table.save();
		return table;
	} catch (err) {
		return err;
	}
};

module.exports = {
	getTableList,
	createTable,
	getTableById,
	updateTableById,
};
