const express = require('express');

const hotelRoutes = require('./api/hotel.route');

const router = express.Router();

router.use('/table', hotelRoutes);

module.exports = router;
