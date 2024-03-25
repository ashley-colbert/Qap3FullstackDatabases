const express = require('express');
const router = express.Router();
const { getStaff, getStaffById, addStaffMember, putStaff} = require('../services/staff.dal');


router.get('/', async (req, res) => {
  if(DEBUG) console.log("Staff.GET");

  try {
      let staffMembers = await getStaff();
      if(DEBUG) console.log("inside the staff.route.GET success");
      if(DEBUG) console.log(staffMembers);
      res.render('staff', {staffMembers});
  } catch {
      res.render('503');
  }
});

router.get('/:staffID', async (req, res) => {

  try {
      let staffID = await getStaffById(req.params.staffID);
      if (staffID.length === 0)
          res.render('norecord')
      else
          res.render('staff', {staffID});
  } catch {
      res.render('503');
  }
});

router.get('/:staffID/replace', async (req, res) => {
  if(DEBUG) console.log('staff.Replace : ' + req.params.staffID);
  res.locals.staffID = req.params.staffID;
  res.locals.name = req.query.name;
  res.locals.streetAdd = req.query.streetAdd;
  res.locals.city = req.query.city;
  res.locals.prov = req.query.prov;
  res.locals.phone = req.query.phone;
  res.locals.email = req.query.email;
  res.render('staffPut.ejs', res.locals);
});

router.put('/:staffID/replace', async (req, res) => {
  console.log("PUT route for updating staff member hit");
  const { staffID } = req.params;
  const { name, streetAdd, city, prov, phone, email } = req.body;
  if (DEBUG) console.log("Updating staff member: " + staffID);
  try {
    const result = await putStaff(staffID, name, streetAdd, city, prov, phone, email);
    res.redirect('/staff/' + staffID);
  } catch {
    res.render('503')
  }
});

// router.post('/:staffID/replace', async (req, res) => {
//   const { staffID } = req.params;
//   const { name, streetAdd, city, prov, phone, email } = req.body;
//   if(DEBUG) console.log("updating staff member: " + staffID);
//   try {
//     await putStaff(staffID, name, streetAdd, city, prov, phone, email);
//     res.redirect('/staff/' + staffID);
//   } catch {
//     res.render('503');
//     res.render('staffPut.ejs', res.locals);
//   }
// })

router.post('/', async (req, res) => {
  if(DEBUG) console.log("Staff.POST");
  try {
      await addStaffMember(req.body.name, req.body.streetAdd, req.body.city, req.body.prov, req.body.phone, req.body.email );
      res.redirect('/Staff/');
  } catch {
      res.render('503');
  }
});


module.exports = router