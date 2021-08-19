const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {activePage: req.lang.navbar_home, navbarClass: 'navbar menu-absolute menu-center', lang: req.lang})
})

router.get('/services', (req, res) => {
    res.render('services', {activePage: req.lang.navbar_services, navbarClass: 'navbar menu-center', lang: req.lang})
})

router.get('/process', (req, res) => {
    res.render('process', {activePage: req.lang.navbar_process, navbarClass: 'navbar menu-center', lang: req.lang})
})

router.get('/case-studies', (req, res) => {
    res.render('case-studies', {activePage: req.lang.navbar_case_studies, navbarClass: 'navbar menu-center', lang: req.lang})
})

module.exports = router