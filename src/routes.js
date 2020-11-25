const hbs = require('hbs');
const express = require('express');
const router = express();
const controller = require('./controller');

router.use(express.static(controller.publicDir));
router.set('view engine', 'hbs');
router.set('views', controller.viewsPath);

hbs.registerPartials(controller.partialsPath);

router.get('/favicon.ico', controller.favicon);
router.get('/', controller.home);
router.get('/orders', controller.getOrders);
router.get('*', controller.notFound);

module.exports = router;