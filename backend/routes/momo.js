const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const MomoControllers = require('../controllers/momo');

// Handle incoming GET requests to /orders
//router.get("/", checkAuth, OrdersController.orders_get_all);

router.post("/", 
//checkAuth, 
MomoControllers.momo);

module.exports = router;