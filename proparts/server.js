
"use strict"
const express = require('express');
const app = express();

app.set('view engine','ejs');
const customer = require("./routes/customer");
const admin = require("./routes/admin");
const seller = require("./routes/seller");


app.use('/', customer);
app.use('/', seller);
app.use('/', admin);


app.listen(8080,()=>{

  console.log('server running  : http://localhost:8080');
});












// var express = require('express');
// var app = express();

// app.set('view engine', 'ejs');

// app.use(express.static('public'));

// const adminRoutes = require('/pages');
// // const customerRoutes = require('/routes/customer');
// // const sellerRoutes = require('/routes/seller');

// // Use the routes
// app.use('/', pages);
// // app.use('/customer', customerRoutes);
// // app.use('/seller', sellerRoutes);

// app.listen(3000);
// console.log('Server is listening on port http://localhost:3000');
// app.get('/', function(req, res) {
//   res.render('pages/signin');
// });

// app.get('/signin', function(req, res) {
//   res.render('pages/signin');
// });

// app.get('/signup', function(req, res) {
//   res.render('pages/signup');
//   });

// app.get('/index', function(req, res) {
//     res.render('pages/index');
//   });

// app.get('/pro', function(req, res) {
//   res.render('pages/pro');
// });

// app.get('/pro1', function(req, res) {
//   res.render('pages/pro1');
// });

// app.get('/addproduct', function(req, res) {
//     res.render('pages/addproduct');
// });

// app.get('/userorders', function(req, res) {
// res.render('pages/userorders');
// });

// app.get('/sellerOrders', function(req, res) {
//   res.render('pages/sellerOrders');
//   });

// app.get('/orderReview', function(req, res) {
//   res.render('pages/orderReview');
//   });

// app.get('/sellerStates', function(req, res) {
//   res.render('pages/sellerStates');
//   });

// app.get('/Products', function(req, res) {
//   res.render('pages/Products');
//   });


// app.get('/vikas', function(req, res) {
//   res.render('pages/vikas');
//   });

// app.get('/cart', function(req, res) {
//   res.render('pages/cart');
//   });


// const express = require('express');
// const app = express();
// const path = require('path');
// const bodyParser = require('body-parser');
// const adminRoutes = require('./routes/admin');
// const sellerRoutes = require('./routes/seller');
// const customerRoutes = require('./routes/customer');

// // Set up EJS as the view engine
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// // Serve static files from the public directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Parse JSON and form data
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Mount route modules
// app.use('/', adminRoutes);
// app.use('/seller', sellerRoutes);
// app.use('/customer', customerRoutes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something went wrong!');
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port http://localhost:${PORT}`);
// });
