const express = require('express')
const router = express.Router()

//? Home route
router.get('/', (req, res) => {
    res.render('homePage')
});

//? News route
router.get('/news', (req, res) => {
    res.render('newsPage')
})

//? Donate route
router.get('/donate', (req, res) => {
    res.render('donatePage')
})

//? Gallery route
router.get('/gallery', (req, res) => {
    res.render('galleryPage')
})

module.exports = router;