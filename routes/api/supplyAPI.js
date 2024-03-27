var router = require('express').Router();
const suppliesDal = require('../../services/supplies.dal')

// api, supplies
router.get('/', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/supplies/ GET ' + req.url);
    try {
        let theItem = await suppliesDal.getSupplies();
        res.json(theItem);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

// api/supplies/:id
router.get('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/supplies/:id GET ' + req.url);
    try {
        let anItem = await suppliesDal.getItemById(req.params.id);
        if (anItem.length === 0) {
            // log this error to an error log file.
            res.statusCode = 404;
            res.json({message: "Not Found", status: 404});
        }
        else
            res.json(anItem);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});
router.post('/', async (req, res) => {
    if(DEBUG) {
        console.log('ROUTE: /api/supplies/ POST');
        console.log(req);
    }
    try {
        await suppliesDal.addItem(req.body.itemID, req.body.name, req.body.quantity, req.body.reorderPoint, req.body.department );
        res.statusCode = 201;
        res.json({message: "Created", status: 201});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    } 
});

router.put('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/supplies PUT ' + req.params.id);
    try {
        await itemsDal.putItem(req.body.itemID, req.body.name, req.body.quantity, req.body.reorderPoint, req.body.department);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

router.patch('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/supplies PATCH ' + req.params.id);
    try {
        await suppliesDal.patchItem(req.params.id, req.body.name, req.body.quantity, req.body.reorderPoint, req.body.department);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

router.delete('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/supplies DELETE ' + req.params.id);
    try {
        await suppliesDal.deleteItem(req.params.id);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

module.exports = router;