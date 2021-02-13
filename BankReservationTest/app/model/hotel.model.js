const mongoose = require('mongoose');
const { Schema } = mongoose;

const hotelSchema = new Schema(
	{
		location: {
			type: String,
		},
		sitsNo: {
			type: Number,
		},
		isReserved: {
			type: Boolean,
			default: false,
		},
		reservationTime: {
			type: String,
		},
		guestName: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);
const hotel = mongoose.model('hotel', hotelSchema);
module.exports = hotel;
