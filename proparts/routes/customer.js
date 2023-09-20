const express = require('express');
const router = express.Router();
router.use(express.static('public'));

router.get('/', (req, res) => {
    res.render('customer/index');
  });

router.get('/index', (req, res) => {
  res.render('customer/index');
});

router.get('/cart', (req, res) => {
  res.render('customer/cart');
});

// router.get('/profile', (req, res) => {
//   res.render('customer/profile');
// });

router.get('/product', (req, res) => {
  res.render('customer/product');
});

router.get('/signin', (req, res) => {
  res.render('customer/signin');
});

router.get('/signup', (req, res) => {
  res.render('customer/signup');
});

router.get('/userorder', (req, res) => {
  res.render('customer/userorder');
});

router.get('/shippingaddress', (req, res) => {
  res.render('customer/shippingaddress');
});
// Add more routes as needed

module.exports = router;

