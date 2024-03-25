const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = 3000;

global.DEBUG = true;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true, }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.render('index.ejs', { });
});

const staffRouter = require('./routes/staff')
app.use('/staff', staffRouter);

const suppliesRouter = require('./routes/supplies')
app.use('/supplies', suppliesRouter);

const ordersRouter = require('./routes/orders')
app.use('/orders', ordersRouter);


// anything beginning with "/api" will go into this
const apiRouter = require('./routes/api')
app.use('/api', apiRouter);

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`Simple app running on port ${PORT}.`)
});

