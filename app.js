const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts');
const { I18n } = require('i18n');
const path = require('path/posix');

//SET
app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout');

//USE
app.use('/assets', express.static('assets'))
app.use(expressLayouts)

//ROUTES
app.get('/', (req, res) => {
    res.render('index')
})

//LOCALES
const i18n = new I18n({
    locales: ['tr', 'en'],
    directory: path.join(__dirname, 'locales')
})

//SERVER
const port = 3000
app.listen(port, (err) => {
    if(err){console.log('SERVER ERROR: ', err)}
    else{console.log('SERVER SUCCESS: ', port)}
})