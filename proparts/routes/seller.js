const express = require('express');
const router = express.Router();

router.use(express.static('public'));

router.get('/vikas', (req, res) => {
  res.render('pages/viaks');
});


// Add more routes as needed

module.exports = router;
