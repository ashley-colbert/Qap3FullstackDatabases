var router = require('express').Router();
const ordersDal = require('../../services/orders.dal')

// api/ordersAPI - router to 'get' all orders from the database, will return in json format
router.get('/', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/order/ GET ' + req.url);
    try {
        let theOrders = await ordersDal.getOrders();
        res.json(theOrders);
    } catch {
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

// api/ordersAPI/:id - will return one specific entry that matched a particular orderID from the database
router.get('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/orders/:id GET ' + req.url);
    try {
        let anOrder = await ordersDal.getOrderByOrderId(req.params.id); 
        if (anOrder.length === 0) {
            res.statusCode = 404;
            res.json({message: "Not Found", status: 404});
        }
        else
            res.json(anOrder);
    } catch {
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

//router to post a new entry into the database
router.post('/', async (req, res) => {
    if(DEBUG) {
        console.log('ROUTE: /api/orders/ POST');
        console.log(req);
    }
    try {
        await ordersDal.addOrder(req.body.orderID, req.body.orderDate, req.body.quantityOrdered, req.body.staffID, req.body.itemID);
        res.statusCode = 201;
        res.json({message: "Created", status: 201});
    } catch {
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

// the put router will replace an entry in the database that matches the orderID
router.put('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/orders PUT ' + req.params.id);
    try {
        await ordersDal.putOrder(req.body.orderID, req.body.orderDate, req.body.quantityOrdered, req.body.staffID, req.body.itemID);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

//the patch router will edit an entry with a matching orderID
router.patch('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/orders PATCH ' + req.params.id);
    try {
        await ordersDal.patchOrder(req.params.id, req.body.orderDate, req.body.quantityOrdered, req.body.staffID, req.body.itemID);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

//this will delete an entry with the matching orderID from the database
router.delete('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/orders DELETE ' + req.params.id);
    try {
        await ordersDal.deleteOrder(req.params.id);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});


module.exports = router;