import express from 'express';
import {addCarController,addBrandController,dispayBrandsController,addModelController,varientsAjaxController,addVarientController} from '../controllers/adminController.js'
const router = express.Router();
import { brands } from '../models/brandsSchema.js';



router.use(express.static('public'));

router.get('/', (req, res) => {
  res.render('admin/index');
});

router.get('/index', (req, res) => {
  res.render('admin/index');
});

router.get('/analytics', (req, res) => {
  res.render('admin/analytics');
});

router.get('/addNewcar',dispayBrandsController);

router.get('/variants', varientsAjaxController);




router.post('/addcar',addCarController)
router.post('/addmodel',addModelController)
router.post('/addbrand',addBrandController)
router.post('/addvarient',addVarientController)
export default router;