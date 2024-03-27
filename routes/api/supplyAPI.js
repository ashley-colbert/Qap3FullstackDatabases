var router = require('express').Router();
const suppliesDal = require('../../services/supplies.dal')

// api/suppliesAPI - router to 'get' all supplies from the database, will return in json format
router.get('/', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/supplies/ GET ' + req.url);
    try {
        let theItem = await suppliesDal.getSupplies();
        res.json(theItem);
    } catch {
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

// api/suppliesAPI/:id - will return one specific entry that matched a particular itemID from the database
router.get('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/supplies/:id GET ' + req.url);
    try {
        let anItem = await suppliesDal.getItemById(req.params.id);
        if (anItem.length === 0) {
            res.statusCode = 404;
            res.json({message: "Not Found", status: 404});
        }
        else
            res.json(anItem);
    } catch {
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

//router to post a new entry into the database
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
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

// the put router will replace an entry in the database that matches the itemID
router.put('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/supplies PUT ' + req.params.id);
    try {
        await suppliesDal.putItem(req.params.id, req.body.name, req.body.quantity, req.body.reorderPoint, req.body.department);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

//the patch router will edit an entry with a matching itemID
router.patch('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/supplies PATCH ' + req.params.id);
    try {
        await suppliesDal.patchItem(req.params.id, req.body.name, req.body.quantity, req.body.reorderPoint, req.body.department);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

//this will delete an entry with the matching itemID from the database
router.delete('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/supplies DELETE ' + req.params.id);
    try {
        await suppliesDal.deleteItem(req.params.id);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

module.exports = router;