const express = require('express');
const router = express.Router();
const { getOrders } = require('../services/orders.dal')

router.get('/', async (req, res) => {
    try {
        let orders = await getOrders(); 
        res.render('Orders', { orders: orders } )
    } catch {
        res.render('503');
    }
});

module.exports = router