const express = require('express');
const router = express.Router();
router.use(express.static('public'));

router.get('/', (req, res) => {
    res.render('customer/index');
  });

router.get('/cart', (req, res) => {
  res.render('customer/cart');
});

router.get('/pro', (req, res) => {
  res.render('customer/pro');
});

router.get('/orderReview', (req, res) => {
  res.render('customer/addProduct');
});

router.get('/Products', (req, res) => {
  res.render('customer/Products');
});

router.get('/signin', (req, res) => {
  res.render('customer/signin');
});

router.get('/signup', (req, res) => {
  res.render('customer/signup');
});
// Add more routes as needed

module.exports = router;
