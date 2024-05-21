const express = require('express');

const { createNew } = require('../controllers/userController');
const router = express.Router();

router.post('/signup', createNew); // definition for signingUp
module.exports = router;
