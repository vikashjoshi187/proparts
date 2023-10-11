import express from 'express';
import { register, login,sellerregister } from '../controllers/customerController.js';
import jwt from '../controllers/customerController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('customer/index',{user:""});
});

router.get('/index', (req, res) => {
  res.render('customer/index',{user:""});
});

router.get('/cart', (req, res) => {
  res.render('customer/cart');
});

router.get('/product', (req, res) => {
  res.render('customer/product');
});

router.get('/signin', (req, res) => {
  res.render('customer/signin', { msg: '' });
});

router.get('/signup', (req, res) => {
  res.render('customer/signup', { msg: '' });
});

router.get('/sellersignup', (req, res) => {
  res.render('customer/sellersignup', { msg: '' });
});

router.get('/userorder', (req, res) => {
  res.render('customer/userorder');
});

router.get('/shippingaddress', (req, res) => {
  res.render('customer/shippingaddress');
});
router.post('/sellerregister', sellerregister);
router.post('/register', register);
router.post('/login', login);

router.get('/logout', (req, res) => {
  console.log("logout")
  res.cookie('jwt', '', { httpOnly: true, maxAge: 1 });
  res.render('customer/signin', { msg: '' });
});
export default router;

