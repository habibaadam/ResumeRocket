const express = require('express');

const {
  createNew, forLogin, forLogout, getUser,
} = require('../controllers/userController');
const { ai } = require('../controllers/aiController');

const router = express.Router();

router.post('/signup', createNew); // handler for signingUp
router.post('/login', forLogin); // handler for logging in
router.post('/logout', forLogout); // handler for logging out
router.get('/user/:id', getUser); // handler for getting a user8
router.post('/ai', ai); // handler for querying the ai model

module.exports = router;
