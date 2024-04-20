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

module.exports = router;