
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const newsController = require('../controllers/newsController');

router.get('/',usersController.index);
router.get('/news',newsController.list);

router.get('/login', usersController.index);
router.post('/login', usersController.login);
router.get('/home/dashboard', usersController.dashboard);
router.get('/signup', usersController.signup);
router.post('/signup', usersController.signup);
router.get('/home/logout', usersController.logout);
module.exports= router;


