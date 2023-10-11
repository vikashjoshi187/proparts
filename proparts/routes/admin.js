import express from 'express';
const router = express.Router();

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

export default router;
