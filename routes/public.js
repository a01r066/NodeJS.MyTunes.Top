const express = require('express');
const router = express.Router();

const publicController = require('../controllers/public/public');

router.get('/', publicController.getIndex);

module.exports = router;