
const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');


router.get('/news',newsController.list);
router.post('/news/add', newsController.add);
router.get('/news/delete/:id_news', newsController.delete);
router.get('/news/update/:id_news', newsController.edit);
router.get('/news/reload', newsController.recarga);
router.post('/news/update/:id_news', newsController.update);
module.exports= router;










