var router = require('express').Router();
const staffDal = require('../../services/staff.dal')

// api/staffAPI - router to 'get' all staff from the database, will return in json format
router.get('/', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/staff/ GET ' + req.url);
    try {
        let theStaff = await staffDal.getStaff();
        res.json(theStaff);
    } catch {
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

// api/staffAPI/:id - will return one specific entry that matched a particular staffID from the database
router.get('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/staff/:id GET ' + req.url);
    try {
        let aStaff = await staffDal.getStaffById(req.params.id);
        if (aStaff.length === 0) {
            res.statusCode = 404;
            res.json({message: "Not Found", status: 404});
        }
        else
            res.json(aStaff);
    } catch {
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

//router to post a new entry into the database
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
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

// the put router will replace an entry in the database that matches the staffID
router.put('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/staff PUT ' + req.params.id);
    try {
        await staffDal.putStaff(req.body.staffID, req.body.name, req.body.streetAdd, req.body.city, req.body.prov, req.body.phone, req.body.email);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

//the patch router will edit an entry with a matching staffID
router.patch('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/staff PATCH ' + req.params.id);
    try {
        await staffDal.patchStaff(req.params.id, req.body.name, req.body.streetAdd, req.body.city, req.body.prov, req.body.phone, req.body.email);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

//this will delete an entry with the matching staffID from the database
router.delete('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/staff DELETE ' + req.params.staffID);
    try {
        await staffDal.deleteStaff(req.params.staffID);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

module.exports = router;