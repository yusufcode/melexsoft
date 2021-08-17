module.exports = async (req, res, next) => {

    // console.log(req.headers["accept-language"] )

    const maxAge = 60*60*24
    const lang = req.cookies.lang

    if(!lang){

        // if(browserLang == 'tr' || browserLang == 'en' || browserLang == 'ge' || browserLang == 'ru'){
        //     res.cookie('lang', browserLang, {maxAge: maxAge * 1000})
        //     req.lang = await require('../langs/' + 'tr' + '.json')
        //     next()
        // }

        res.cookie('lang', 'tr', {maxAge: maxAge * 1000})
        req.lang = await require('../langs/' + 'tr' + '.json')
        next()
    } else{
        res.cookie('lang', lang, {maxAge: maxAge * 1000})
        req.lang = await require('../langs/' + lang + '.json')
        next()
    }

}