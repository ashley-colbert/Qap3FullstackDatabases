var router = require('express').Router();
const staffDal = require('../../services/staff.dal')

// api, staff
router.get('/', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/staff/ GET ' + req.url);
    try {
        let theStaff = await staffDal.getStaff();
        res.json(theStaff);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

// api/staff/:id
router.get('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/staff/:id GET ' + req.url);
    try {
        let aStaff = await staffDal.getStaffById(req.params.id);
        if (aStaff.length === 0) {
            // log this error to an error log file.
            res.statusCode = 404;
            res.json({message: "Not Found", status: 404});
        }
        else
            res.json(aStaff);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});
router.post('/', async (req, res) => {
    if(DEBUG) {
        console.log('ROUTE: /api/staff/ POST');
        console.log(req);
    }
    try {
        await staffDal.addStaff(req.body.staffID, req.body.name, req.body.streetAdd, req.body.city, req.body.prov, req.body.phone, req.body.email );
        res.statusCode = 201;
        res.json({message: "Created", status: 201});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

router.put('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/staff PUT ' + req.params.id);
    try {
        await staffDal.putStaff(req.body.staffID, req.body.name, req.body.streetAdd, req.body.city, req.body.prov, req.body.phone, req.body.email);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

router.patch('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/staff PATCH ' + req.params.id);
    try {
        await staffDal.patchStaff(req.params.id, req.body.name, req.body.streetAdd, req.body.city, req.body.prov, req.body.phone, req.body.email);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

router.delete('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/staff DELETE ' + req.params.id);
    try {
        await staffDal.deleteItem(req.params.id);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

module.exports = router;