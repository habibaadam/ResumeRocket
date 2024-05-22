const express = require('express');

const { createNew, forLogin } = require('../controllers/userController');
const router = express.Router();

router.post('/signup', createNew); // handler for signingUp
router.post('/login', forLogin); // handler for logging in

module.exports = router;
