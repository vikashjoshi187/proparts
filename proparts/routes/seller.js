import express from 'express';
const router = express.Router();
import sellerController from '../controllers/sellerController.js';
import upload from "../middleware/upload.js";

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
router.post("/addproduct", upload,sellerController.add_product);

// Add more routes as needed
export default router;
