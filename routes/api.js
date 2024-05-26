const express = require('express');


const { createNewUser, forLogin, forLogout } = require('../controllers/userController');
const { createNewCV } = require('../controllers/cvController');
const { createNewRec } = require('../controllers/recController');

const router = express.Router();

router.post('/signup', createNewUser); // handler for signingUp
router.post('/login', forLogin); // handler for logging in
router.post('/logout', forLogout); // handler for logging out

router.post('/cv', createNewCV); // handler for creating a new cv

router.post('/rec', createNewRec); // handler for creating a new rec

module.exports = router;
