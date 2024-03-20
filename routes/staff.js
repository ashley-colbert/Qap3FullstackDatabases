const express = require('express');
const router = express.Router();
const { getStaff, getStaffById, addStaffMember } = require('../services/staff.dal');

router.get('/', async (req, res) => {
  if(DEBUG) console.log("Staff.GET");

  try {
      let staffMembers = await getStaff(); // from postgresql
      if(DEBUG) console.log("inside the staff.route.GET success");
      if(DEBUG) console.log(staffMembers);
      res.render('staff', {staffMembers});
  } catch {
      res.render('503');
  }
});

router.get('/:id', async (req, res) => {

  try {
      let member = await getStaffById(req.params.id);
      if (member.length === 0)
          res.render('norecord')
      else
          res.render('staff', {member});
  } catch {
      res.render('503');
  }
});

router.post('/', async (req, res) => {
  if(DEBUG) console.log("Staff.POST");
  try {
      await addStaffMember(req.body.name, req.body.street.add, req.body.city, req.body.prov, req.body.phone, req.body.email );
      res.redirect('/Staff/');
  } catch {
      res.render('503');
  }
});

module.exports = router