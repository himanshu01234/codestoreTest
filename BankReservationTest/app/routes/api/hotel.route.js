const express = require('express');

const HotelController = require('../../controller/hotel.controller');
const router = express.Router();

router.post('/create', HotelController.createTable);
router.get('/list', HotelController.getTableList);
router.put('/book', HotelController.bookTable);
router.get('/detail/:tableId', HotelController.tableDetails);
router.put('/cancelBooking', HotelController.cancelBooking);

module.exports = router;
