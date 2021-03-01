const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin/admin');

router.get('/', adminController.getIndex);
router.get('/genres', adminController.getGenres);

module.exports = router;