const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {headTitle:req.lang.head_home_title, headDesc:req.lang.head_home_desc, headKeywords:req.lang.head_home_keywords, activePage: req.lang.navbar_home, navbarClass: 'navbar menu-absolute menu-center', lang: req.lang})
})

router.get('/services', (req, res) => {
    res.render('services', {headTitle:req.lang.head_services_title, headDesc:req.lang.head_services_desc, headKeywords:req.lang.head_services_keywords, activePage: req.lang.navbar_services, navbarClass: 'navbar menu-center', lang: req.lang})
})

router.get('/process', (req, res) => {
    res.render('process', {headTitle:req.lang.head_process_title, headDesc:req.lang.head_process_desc, headKeywords:req.lang.head_services_process, activePage: req.lang.navbar_process, navbarClass: 'navbar menu-center', lang: req.lang})
})

router.get('/case-studies', (req, res) => {
    res.render('case-studies', {headTitle:req.lang.head_case_studies_title, headDesc:req.lang.head_case_studies_desc, headKeywords:req.lang.head_services_case_studies, activePage: req.lang.navbar_case_studies, navbarClass: 'navbar menu-center', lang: req.lang})
})

router.get('/contact', (req, res) => {
    res.render('contact', {headTitle:req.lang.head_contact_title, headDesc:req.lang.head_contact_desc, headKeywords:req.lang.head_contact_keywords, activePage: req.lang.navbar_contact, navbarClass: 'navbar menu-center', lang: req.lang})
})

router.get('/404', (req, res) => {
    res.render('404', {headTitle:req.lang.head_404_title, headDesc:req.lang.head_404_desc, headKeywords:req.lang.head_404_keywords, activePage: '', navbarClass: 'navbar menu-center', lang: req.lang})
})

router.get('*', (req, res) => {
    res.redirect('404')
})

module.exports = router