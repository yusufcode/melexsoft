const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser')

//SET
app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout');

//USE
app.use('/assets', express.static('assets'))
app.use('/node_modules', express.static('node_modules'))
app.use(expressLayouts)
app.use(cookieParser())

//MIDDLEWARES
const languageMw = require('./middlewares/languageMw')

//ROUTES
app.use('/', languageMw, require('./routes/indexGetRoutes'))
app.use('/', require('./routes/indexPostRoutes'))


//SERVER
const port = 3000
app.listen(port, (err) => {
    if(err){console.log('SERVER ERROR: ', err)}
    else{console.log('SERVER SUCCESS: ', port)}
})