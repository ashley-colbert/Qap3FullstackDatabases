const express = require('express');
const router = express.Router();
const suppliesDal = require('../services/supplies.dal')

//router to retieve all entries from the database
router.get('/', async (req, res) => {
    try {
        let theItem = await suppliesDal.getSupplies();
        if(DEBUG) console.table(theItem);
        res.render('supplies', {theItem});
    } catch {
        res.render('503');
    }
});

//router to retrieve one particular entry from the database using itemID as a parameter
router.get('/:id', async (req, res) => {

    try {
        const anItem = await suppliesDal.getItemById(req.params.id);
        if(DEBUG) console.log(`supplies.router.get/:id ${anItem}`);
        if (anItem)
            res.render('supplies', {anItem});
        else
            res.render('norecord');
    } catch {
        res.render('503');
    }
});

//router to replace and entry in the database using the itemID as a parameter
router.get('/:id/replace', async (req, res) => {
    if(DEBUG) console.log('supplies.Replace : ' + req.params.id);
    res.render('supplyPut.ejs', {name: req.query.name, quantity: req.query.quantity, reorderPoint: req.query.reorderPoint, department: req.query.department, theId: req.params.id});
});

//router to edit an entry in the database using the itemID as a parameter
router.get('/:id/edit', async (req, res) => {
    if(DEBUG) console.log('item.Edit : ' + req.params.id);
    res.render('supplyPatch.ejs', {name: req.query.name, quantity: req.query.quantity, reorderPoint: req.query.reorderPoint, department: req.query.department, theId: req.params.id});
});

//router to delete an entry from the database using the itemID as a parameter
router.get('/:id/delete', async (req, res) => {
    if(DEBUG) console.log('item.Delete : ' + req.params.id);
    res.render('supplyDelete.ejs', {name: req.query.name, quantity: req.query.quantity, reorderPoint: req.query.reorderPoint, department: req.query.department, theId: req.params.id});
});

//router to add a new entry to the database
router.post('/', async (req, res) => {
    if(DEBUG) console.log("supplies.POST");
    try {
        await suppliesDal.addItem(req.body.itemID, req.body.name, req.body.quantity, req.body.reorderPoint, req.body.department);
        res.redirect('/supplies/');
    } catch {
        res.render('503');
    }
});

// PUT, PATCH, and DELETE are part of HTTP, not a part of HTML

router.put('/:id', async (req, res) => {
    if(DEBUG) console.log('supplies.PUT: ' + req.params.id);
    try {
        await suppliesDal.putItem(req.params.id, req.body.name, req.body.quantity, req.body.reorderPoint, req.body.department);
        res.redirect('/supplies/');
    } catch {
        res.render('503');
    }
});
router.patch('/:id', async (req, res) => {
    if(DEBUG) console.log('item.PATCH: ' + req.params.id);
    try {
        await suppliesDal.patchItem(req.params.id, req.body.name, req.body.quantity, req.body.reorderPoint, req.body.department);
        console.log("edited")
        res.redirect('/supplies/');
    } catch {
        res.render('503');
    }
});

router.delete('/:id', async (req, res) => {
    if(DEBUG) console.log('item.DELETE: ' + req.params.id);
    try {
        await suppliesDal.deleteItem(req.params.id);
        res.redirect('/supplies/');
    } catch (err) {
        if(DEBUG) console.error(err);
        res.render('503');
    }
});

module.exports = router