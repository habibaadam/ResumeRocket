const express = require('express');

const {
  createNew, forLogin, forLogout, getUser,
} = require('../controllers/userController');
const { ai } = require('../controllers/aiController');

const { createNewUser, forLogin, forLogout, getUser } = require('../controllers/userController');
const { createNewCv, getCv } = require('../controllers/cvController');
const { createNewRec, getRec } = require('../controllers/recController');

const router = express.Router();

router.post('/signup', createNewUser); // handler for signingUp
router.post('/login', forLogin); // handler for logging in
router.post('/logout', forLogout); // handler for logging out
router.get('/user/:id', getUser); // handler for getting a user

router.post('/newCV', createNewCv); // handler for creating a new cv
router.get('/getCV/:id', getCv); // handler for getting a cv

router.post('/newRec', createNewRec); // handler for creating a new rec
router.get('/getRec/:id', getRec); // handler for getting a rec
router.get('/user/:id', getUser); // handler for getting a user8
router.post('/ai', ai); // handler for querying the ai model

module.exports = router;
