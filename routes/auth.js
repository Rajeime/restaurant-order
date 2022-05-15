const express = require("express");
const loginController = require('../controllers/login');
const orderController = require('../controllers/order');

const router = express.Router();

router.post('/login', loginController.login);
router.post('/order', orderController.order);

module.exports = router; 