const express = require('express');
const router = express.Router();
const ordersDal = require('../services/orders.dal')

// https://localhost:3000/orders/
router.get('/', async (req, res) => {
    // const theOrders = [
    //     {first_name: 'Youn', last_name: 'Yuh-jung'},
    //     {first_name: 'Laura', last_name: 'Dern'},
    //     {first_name: 'Regina', last_name: 'King'}
    // ];
    try {
        let theOrders = await ordersDal.getOrders(); 
        if(DEBUG) console.table(theOrders);
        res.render('orders', {theOrders});
    } catch {
        res.render('503');
    }
});

router.get('/:id', async (req, res) => {

    try {
        const anOrder = await ordersDal.getOrderByOrderId(req.params.id); 
        if(DEBUG) console.log(`orders.router.get/:id ${anOrder}`);
        if (anOrder)
            res.render('order', {anOrder});
        else
            res.render('norecord');
    } catch {
        res.render('503');
    }
});

router.get('/:id/replace', async (req, res) => {
    if(DEBUG) console.log('order.Replace : ' + req.params.id);
    res.render('orderPut.ejs', {quantityOrdered: req.query.quantityOrdered, orderDate: req.query.orderDate, theId: req.params.id});
});

// https://localhost:3000/orders/205/edit
router.get('/:id/edit', async (req, res) => {
    if(DEBUG) console.log('order.Edit : ' + req.params.id);
    res.render('orderPatch.ejs', {quantityOrdered: req.query.quantityOrdered, orderDate: req.query.orderDate, theId: req.params.id});
});

router.get('/:id/delete', async (req, res) => {
    if(DEBUG) console.log('order.Delete : ' + req.params.id);
    res.render('orderDelete.ejs', {orderDate: req.query.orderDate, quantityOrdered: req.query.quantityOrdered, staffID: req.query.staffID, itemID: req.query.itemID ,theId: req.params.id});
});

router.post('/', async (req, res) => {
    if(DEBUG) console.log("orders.POST");
    try {
        await ordersDal.addOrder(req.body.orderID, req.body.orderDate, req.body.quantityOrdered, req.body.staffID, req.body.itemID);
        res.redirect('/orders/');
    } catch {
        // log this error to an error log file.
        res.render('503');
    }
});

// PUT, PATCH, and DELETE are part of HTTP, not a part of HTML
// Therefore, <form method="PUT" ...> doesn't work, but it does work for RESTful API

router.put('/:id', async (req, res) => {
    if(DEBUG) console.log('orders.PUT: ' + req.params.id);
    try {
        await ordersDal.putOrder(req.body.orderID, req.body.orderDate, req.body.quantityOrdered, req.body.staffID, req.body.itemID );
        res.redirect('/orders/');
    } catch {
        // log this error to an error log file.
        res.render('503');
    }
});
router.patch('/:id', async (req, res) => {
    if(DEBUG) console.log('orders.PATCH: ' + req.params.id);
    try {
        await ordersDal.patchOrder(req.body.orderID, req.body.orderDate, req.body.quantityOrdered, req.body.staffID, req.body.itemID );
        res.redirect('/orders/');
    } catch {
        // log this error to an error log file.
        res.render('503');
    }
});
router.delete('/:id', async (req, res) => {
    if(DEBUG) console.log('orders.DELETE: ' + req.params.orderID);
    try {
        await ordersDal.deleteOrder(req.params.orderID);
        res.redirect('/orders/');
    } catch (err) {
        if(DEBUG) console.error(err);
        // log this error to an error log file.
        res.render('503');
    }
});

module.exports = router