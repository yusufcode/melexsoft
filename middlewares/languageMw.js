module.exports = async (req, res, next) => {

    const maxAge = 60*60*24
    const lang = req.cookies.lang

    if(!lang){
        res.cookie('lang', 'tr', {maxAge: maxAge * 1000})
        req.lang = await require('../locales/' + 'tr' + '.json')
        next()
    } else{
        res.cookie('lang', lang, {maxAge: maxAge * 1000})
        req.lang = await require('../locales/' + lang + '.json')
        next()
    }

}