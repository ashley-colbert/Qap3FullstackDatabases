const express = require('express');
const router = express.Router();
const { getSupplies, getSupplyById, addSupply } = require('../services/supplies.dal');

router.get('/', async (req, res) => {
  if(DEBUG) console.log("Supplies.GET");

  try {
      let allItems = await getSupplies();
      if(DEBUG) console.log("inside the supplies.route.GET success");
      if(DEBUG) console.log(allItems);
      res.render('Supplies', {allItems});
  } catch {
      res.render('503');
  }
});

router.get('/:id', async (req, res) => {

  try {
      let item = await getSupplyById(req.params.id);
      if (member.length === 0)
          res.render('norecord')
      else
          res.render('Supplies', {item});
  } catch {
      res.render('503');
  }
});

router.post('/', async (req, res) => {
  if(DEBUG) console.log("Supplies.POST");
  try {
      await addSupply(req.body.name, req.body.quantity, req.body.reorderPoint, req.body.department );
      res.redirect('/Supplies/');
  } catch {
      res.render('503');
  }
});

module.exports = router