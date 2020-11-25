const path = require('path');

exports.publicDir = path.join(__dirname, '../public');
exports.viewsPath = path.join(__dirname, '../resources/views');
exports.partialsPath = path.join(__dirname, '../resources/partials');

exports.home = (req, res) => {
    res.render('index', {
        title: 'Index'
    });
}

exports.getOrders = (req, res) => {
    res.render('orders', {
        title: 'View Orders'
    });
}

exports.favicon = (req, res) => {
    console.log('inside favicon');
    (req, res) => res.status(204);
}

exports.notFound = (req, res) => {
    res.render('404');
}