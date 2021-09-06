const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

//SET
app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout');

//USE
app.use('/assets', express.static('assets'))
app.use('/assets', express.static('node_modules'))
app.use(expressLayouts)
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//MIDDLEWARES
const languageMw = require('./middlewares/languageMw')

//ROUTES
app.use('/', languageMw, require('./routes/indexGetRoutes'))
app.use('/', require('./routes/indexPostRoutes'))


//SERVER
const port = 3001
app.listen(port, (err) => {
    if(err){console.log('SERVER ERROR: ', err)}
    else{console.log('SERVER SUCCESS: ', port)}
})