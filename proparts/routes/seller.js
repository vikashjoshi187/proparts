import express from 'express';
const router = express.Router();

router.use(express.static('public'));

router.get('/', (req, res) => {
  res.render('seller/index');
});

router.get('/index', (req, res) => {
  res.render('seller/index');
});

router.get('/addproduct', (req, res) => {
  res.render('seller/addproduct');
});

router.get('/selleranalytics', (req, res) => {
  res.render('seller/selleranalytics');
});

router.get('/sellerorder', (req, res) => {
  res.render('seller/sellerorder');
});

// Add more routes as needed
export default router;
