var router = require('express').Router();
const ordersDal = require('../../services/orders.dal')

// api/orders
router.get('/', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/order/ GET ' + req.url);
    try {
        let theOrders = await ordersDal.getOrders(); 
        res.json(theOrders);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});
// api/orders/:id
router.get('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/orders/:id GET ' + req.url);
    try {
        let anOrder = await ordersDal.getOrderByOrderId(req.params.id); 
        if (anOrder.length === 0) {
            // log this error to an error log file.
            res.statusCode = 404;
            res.json({message: "Not Found", status: 404});
        }
        else
            res.json(anOrder);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});
router.post('/', async (req, res) => {
    if(DEBUG) { 
        console.log('ROUTE: /api/orders/ POST');
        // console.log(req);
    }
    try {
        await ordersDal.addOrder(req.params.id, req.body.orderDate, req.body.quantityOrdered, req.body.staffID, req.body.itemID);
        res.statusCode = 201;
        res.json({message: "Created", status: 201});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

router.put('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/orders PUT ' + req.params.id);
    try {
        await ordersDal.putOrder(req.params.id, req.body.orderDate, req.body.quantityOrdered, req.body.staffID, req.body.itemID);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

router.patch('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/orders PATCH ' + req.params.id);
    try {
        await ordersDal.patchOrder(req.params.id, req.body.orderDate, req.body.quantityOrdered, req.body.staffID, req.body.itemID);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

router.delete('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/orders DELETE ' + req.params.id);
    try {
        await ordersDal.deleteOrder(req.params.id);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});
// // list the active api routes
// if(DEBUG) {
//     router.stack.forEach(function(r){
//         if (r.route && r.route.path){
//         console.log(r.route.path)
//         }
//     });
// }

module.exports = router;