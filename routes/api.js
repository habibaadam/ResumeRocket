const express = require('express');

const { createNew, forLogin, forLogout } = require('../controllers/userController');
const router = express.Router();

router.post('/signup', createNew); // handler for signingUp
router.post('/login', forLogin); // handler for logging in
router.post('/logout', forLogout); // handler for logging out

module.exports = router;
