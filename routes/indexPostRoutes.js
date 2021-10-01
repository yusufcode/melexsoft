const express = require('express')
const router = express.Router()
const nodeMailer = require('nodemailer')
const ejs = require('ejs')

router.post('/changeLanguage/:lang?', (req, res) => {

    const lang = req.params.lang

    const maxAge = 60*60*24
    res.cookie('lang', lang, {maxAge: maxAge * 1000})

    res.send({
        status: true
    })

})

router.post('/send-message', async (req, res) => {

    const mailInfo = await req.body

    const transporter = await nodeMailer.createTransport({
        host: "smtp.yandex.com",
        port: 465,
        secure: true,
        auth: {
            user: "system@melexsoft.com",
            pass: 'ccfevrtzowefuowa'
        },
        tls: {rejectUnauthorized: false}
    })

    ejs.renderFile('./views/layouts/mail.ejs', {mailInfo: mailInfo}, async (err, data) => {

        const mail = await {
            from: "system@melexsoft.com",
            to: "system@melexsoft.com",
            subject: "Melexsoft.com'dan Yeni Bir Mesaj",
            html: data
        }
    
        transporter.sendMail(mail, (err, data) => {
            if(err){
                res.send({
                    status: false,
                    message: req.lang.contact_response_error
                })
            } else{
                res.send({
                    status: true,
                    message: req.lang.contact_response_success
                })
            }
        })

    })

})

router.post('/job-application', async (req, res) => {

    const mailInfo = await req.body

    console.log(mailInfo)
    
    const transporter = nodeMailer.createTransport({
        host: "smtp.yandex.com",
        port: 465,
        secure: true,
        auth: {
            user: "system@melexsoft.com",
            pass: 'ccfevrtzowefuowa'
        },
        tls: {rejectUnauthorized: false}
    })

    ejs.renderFile('./views/layouts/mail-job-application.ejs', {mailInfo: mailInfo}, async (err, data) => {

        const mail = await {
            from: "system@melexsoft.com",
            to: "system@melexsoft.com",
            subject: "İş Başvurusu",
            html: data
        }
    
        transporter.sendMail(mail, (err, data) => {
            if(err){
                res.send({
                    status: false,
                    message: req.lang.career_response_error
                })
            } else{
                res.send({
                    status: true,
                    message: req.lang.career_response_success
                })
            }
        })

    })
    
})

module.exports = router