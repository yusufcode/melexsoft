const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {activePage: 'home', navbarClass: 'navbar menu-absolute menu-center', lang: req.lang})
})

router.get('/case-studies', (req, res) => {
    res.render('case-studies', {activePage: 'case-studies', navbarClass: 'navbar menu-center', lang: req.lang})
})

module.exports = router