const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser')

//SET
app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout');

//USE
app.use('/assets', express.static('assets'))
app.use(expressLayouts)
app.use(cookieParser())

//MIDDLEWARES
const languageMw = require('./middlewares/languageMw')

//ROUTES
app.get('/', languageMw, (req, res) => {

    res.render('index', {activePage: 'home', lang: req.lang})
})

app.post('/changeLanguage/:lang?', (req, res) => {

    const lang = req.params.lang

    const maxAge = 60*60*24
    res.cookie('lang', lang, {maxAge: maxAge * 1000})

    res.send({
        status: true
    })

})

//SERVER
const port = 3000
app.listen(port, (err) => {
    if(err){console.log('SERVER ERROR: ', err)}
    else{console.log('SERVER SUCCESS: ', port)}
})