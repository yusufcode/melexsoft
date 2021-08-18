const express = require('express')
const router = express.Router()

router.post('/changeLanguage/:lang?', (req, res) => {

    const lang = req.params.lang

    const maxAge = 60*60*24
    res.cookie('lang', lang, {maxAge: maxAge * 1000})

    res.send({
        status: true
    })

})

module.exports = router