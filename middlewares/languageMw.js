module.exports = async (req, res, next) => {

    const fs = require('fs')

    const maxAge = 60*60*24
    const lang = req.cookies.lang
    const browserLang = req.headers['accept-language']

    if(fs.existsSync('./locales/'+ lang +'.json')){
        res.cookie('lang', lang, {maxAge: maxAge * 1000})
        req.lang = await require('../locales/' + lang + '.json')
        next()
    } else if(fs.existsSync('./locales/'+ browserLang +'.json')){
        res.cookie('lang', browserLang, {maxAge: maxAge * 1000})
        req.lang = await require('../locales/' + browserLang + '.json')
        next()
    } else {
        res.cookie('lang', 'en', {maxAge: maxAge * 1000})
        req.lang = await require('../locales/' + 'en' + '.json')
        next()
    }

}