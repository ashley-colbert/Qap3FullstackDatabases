const express = require('express');
const router = express.Router();
const staffDal = require('../services/staff.dal')

//will get all staff entries from the database
router.get('/', async (req, res) => {
    try {
        let theStaff = await staffDal.getStaff();
        if(DEBUG) console.table(theStaff);
        res.render('staff', {theStaff});
    } catch {
        res.render('503');
    }
});

//will get one particular entry from the database using the staffID as a parameter
router.get('/:id', async (req, res) => {
    try {
        const aStaff = await staffDal.getStaffById(req.params.id);
        if(DEBUG) console.log(`staff.router.get/:id ${aStaff}`);
        if (aStaff)
            res.render('staff', {aStaff});
        else
            res.render('norecord');
    } catch {
        res.render('503');
    }
});

//router to replace an entry in the database using the staffID as a parameter
router.get('/:id/replace', async (req, res) => {
    if(DEBUG) console.log('staff.Replace : ' + req.params.id);
    res.render('staffPut.ejs', {name: req.query.name, streetAdd: req.query.streetAdd, city: req.query.city, prov: req.query.prov, phone: req.query.phone, email: req.query.email, theId: req.params.id});
});

//router to edit an entry in the database using the staffID as a parameter
router.get('/:id/edit', async (req, res) => {
    if(DEBUG) console.log('staff.Edit : ' + req.params.id);
    res.render('staffPatch.ejs', {name: req.query.name, streetAdd: req.query.streetAdd, city: req.query.city, prov: req.query.prov, phone: req.query.phone, email: req.query.email, theId: req.params.id});
});

//router to delete an entry in the database using the staffID as a parameter
router.get('/:id/delete', async (req, res) => {
    if(DEBUG) console.log('staff.Delete : ' + req.params.id);
    res.render('staffDelete.ejs', {name: req.query.name, streetAdd: req.query.streetAdd, city: req.query.city, prov: req.query.prov, phone: req.query.phone, email: req.query.email, theId: req.params.id});
});

//Router to add a new entry into the database
router.post('/', async (req, res) => {
    if(DEBUG) console.log("staff.POST");
    try {
        await staffDal.addStaff(req.body.staffID, req.body.name, req.body.streetAdd, req.body.city, req.body.prov, req.body.city, req.body.phone, req.body.email);
        res.redirect('/staff/');
    } catch {
        res.render('503');
    }
});

// PUT, PATCH, and DELETE are part of HTTP, not a part of HTML

router.put('/:id', async (req, res) => {
    if(DEBUG) console.log('staff.PUT: ' + req.params.id);
    try {
        await staffDal.putStaff(req.params.id, req.body.name, req.body.streetAdd, req.body.city, req.body.prov, req.body.phone, req.body.email);
        res.redirect('/staff/');
    } catch {
        res.render('503');
    }
});

router.patch('/:id', async (req, res) => {
    if(DEBUG) console.log('staff.PATCH: ' + req.params.id);
    try {
        await staffDal.patchStaff(req.params.id, req.body.name, req.body.streetAdd, req.body.city, req.body.prov, req.body.phone, req.body.email);
        console.log("edited")
        res.redirect('/staff/');
    } catch {
        res.render('503');
    }
});

router.delete('/:id', async (req, res) => {
    if(DEBUG) console.log('staff.DELETE: ' + req.params.id);
    try {
        await staffDal.deleteStaff(req.params.id);
        res.redirect('/staff/');
    } catch (err) {
        if(DEBUG) console.error(err);
        res.render('503');
    }
});

module.exports = router