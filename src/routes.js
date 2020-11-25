const path = require("path");
const hbs = require("hbs");
const express = require("express");
const router = express();

const publicDir = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../resources/views");
const partialsPath = path.join(__dirname, "../resources/partials");

router.use(express.static(publicDir));
router.set("view engine", "hbs")
router.set("views", viewsPath)
hbs.registerPartials(partialsPath)

router.get('/favicon.ico', (req, res) => res.status(204));

router.get("/", (req, res) => {
    res.render("index", {
        title: "Index"
    });
});

router.get("/orders", (req, res) => {
    res.render("orders", {
        title: "View Orders"
    });
});

router.get("*", (req, res) => {
    res.render("404");
});

module.exports = router;