import express from 'express';
import { register, login, sellerregister, authenticateJWT, authorizeUser,customerproduct,addtocart,cartShow} from '../controllers/customerController.js';
import jwt from '../controllers/customerController.js';

const router = express.Router();

router.get('/',authenticateJWT, (req, res) => {
  res.render('customer/index', { user: "" });
});

router.get('/index',authenticateJWT, (req, res) => {
  const user = req.cookies.user;
  if (user)
    res.render('customer/index', { user: user });
  else
    res.render('customer/index', { user: "" });
});

router.get('/cart', cartShow);

// router.get('/product', (req, res) => {
//   res.render('customer/product');
// });

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

router.get('/product', customerproduct);

router.get('/addtocart:id',addtocart);


router.get('/logout', (req, res) => {
  console.log("logout")
  res.cookie('jwt', '', { httpOnly: true, maxAge: 1 });
  res.cookie('user', '', { httpOnly: true, maxAge: 1 });
  res.render('customer/signin', { msg: '' });
});

export default router;

