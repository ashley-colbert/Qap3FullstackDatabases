var router = require('express').Router();


// routers for restAPI
if(DEBUG) {
    console.log('ROUTE: /api/staffAPI');
    console.log('ROUTE: /api/orderAPI');
    console.log('ROUTE: /api/suppliesAPI');
}
// http://localhost:3000/api/staffAPI/
const staffRouter = require('./staffAPI')
router.use('/staffAPI', staffRouter);

// http://localhost:3000/api/orderAPI/
const orderRouter = require('./orderAPI')
router.use('/orderAPI', orderRouter);

// http://localhost:3000/api/suppliesAPI/
const suppliesRouter = require('./supplyAPI')
router.use('/suppliesAPI', suppliesRouter);


module.exports = router;