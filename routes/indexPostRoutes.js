const express = require('express')
const router = express.Router()
const nodeMailer = require('nodemailer')
const ejs = require('ejs')

function inputCheck(text, minChar, maxChar, regex, select){

    if (minChar && text.length < minChar && minChar < maxChar && !select){
        return 'more'
    } 
    
    if (maxChar && text.length > maxChar && maxChar > minChar && !select){
        return 'less'
    } 
    
    if (regex && !regex.test(text)){
        return 'form'
    } 

    if (select && text.length < 1){
        return 'select'
    } 
    
    else{
        return true
    }
    
}

router.post('/changeLanguage/:lang?', (req, res) => {

    const lang = req.params.lang

    const maxAge = 60*60*24
    res.cookie('lang', lang, {maxAge: maxAge * 1000})

    res.send({
        status: true
    })

})

router.post('/contact', async (req, res) => {

    let {firstNameCheck, lastNameCheck, emailCheck, phoneCheck, subjectCheck, messageCheck} = false
    let {firstNameProblem, lastNameProblem, emailProblem, phoneProblem, subjectProblem, messageProblem} = ''

    const mailInfo = await req.body

    if(inputCheck(req.body.firstName, 2, 20, /^[a-zA-ZğüşöçİĞÜŞÖÇ ]+$/, false) == true){
        firstNameCheck = true
    } else{
        firstNameCheck = false
        firstNameProblem = inputCheck(req.body.firstName, 2, 20, /^[a-zA-ZğüşöçİĞÜŞÖÇ ]+$/, false)
    }
    
    if(inputCheck(req.body.lastName, 2, 20, /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/, false) == true){
        lastNameCheck = true
    } else{
        lastNameCheck = false
        lastNameProblem = inputCheck(req.body.lastName, 2, 20, /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/, false)
    }

    if(inputCheck(req.body.email, 7, 30, /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, false) == true){
        emailCheck = true
    } else{
        emailCheck = false
        emailProblem = inputCheck(req.body.email, 7, 30, /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, false)
    }
    
    if(inputCheck(req.body.phone, 7, 15, /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g, false) == true){
        phoneCheck = true
    } else{
        phoneCheck = false
        phoneProblem = inputCheck(req.body.phone, 7, 15, /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g, false)
    }

    if(inputCheck(req.body.subject, 3, 20, /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/, false) == true){
        subjectCheck = true
    } else{
        subjectCheck = false
        subjectProblem = inputCheck(req.body.subject, 3, 20, /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/, false)
    }

    if(inputCheck(req.body.message, 10, 500, /^[a-zA-ZğüşöçİĞÜŞÖÇ., ()#]+$/, false) == true){
        messageCheck = true
    } else{
        messageCheck = false
        messageProblem = inputCheck(req.body.message, 10, 500, /^[a-zA-ZğüşöçİĞÜŞÖÇ.,!? ()#]+$/, false)
    }

    if(firstNameCheck && lastNameCheck && emailCheck && phoneCheck && subjectCheck && messageCheck){

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
        
    } else{

        res.send({
            status: false,
            message: req.lang.contact_response_error,
            errors: [
                ["firstName", firstNameProblem],
                ["lastName", lastNameProblem], 
                ["email", emailProblem], 
                ["phone", phoneProblem], 
                ["subject", subjectProblem],
                ["message", messageProblem]
            ]
        })
        
    }

    

})

router.post('/job-application', async (req, res) => {

    let {firstNameCheck, lastNameCheck, genderCheck, dateOfBirthCheck, placeOfBirthCheck, placeOfResidenceCheck, citizenshipCheck, emailCheck, phoneCheck, programmingLangCheck, frameworksCheck, databasesCheck, toolsCheck, operatingSystemsCheck, languagesCheck, experienceCheck} = false
    let {firstNameProblem, lastNameProblem, genderProblem, dateOfBirthProblem, placeOfBirthProblem, placeOfResidenceProblem, citizenshipProblem, emailProblem, phoneProblem, programmingLangProblem, frameworksProblem, databasesProblem, toolsProblem, operatingSystemsProblem, languagesProblem, experienceProblem} = ''
    
    const mailInfo = await req.body

    if(inputCheck(req.body.firstName, 2, 20, /^[a-zA-ZğüşöçİĞÜŞÖÇ ]+$/, false) == true){
        firstNameCheck = true
    } else{
        firstNameCheck = false
        firstNameProblem = inputCheck(req.body.firstName, 2, 20, /^[a-zA-ZğüşöçİĞÜŞÖÇ ]+$/, false)
    }
    
    if(inputCheck(req.body.lastName, 2, 20, /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/, false) == true){
        lastNameCheck = true
    } else{
        lastNameCheck = false
        lastNameProblem = inputCheck(req.body.lastName, 2, 20, /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/, false)
    }

    if(inputCheck(req.body.gender, false, false, false, true) == true){
        genderCheck = true
    } else{
        genderCheck = false
        genderProblem = inputCheck(req.body.gender, false, false, false, true)
    }

    if(inputCheck(req.body.dateOfBirth, false, false, false, true) == true){
        dateOfBirthCheck = true
    } else{
        dateOfBirthCheck = false
        dateOfBirthProblem = inputCheck(req.body.dateOfBirth, false, false, false, true)
    }
    
    if(inputCheck(req.body.placeOfBirth, 2, 20, /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/, false) == true){
        placeOfBirthCheck = true
    } else{
        placeOfBirthCheck = false
        placeOfBirthProblem = inputCheck(req.body.lastName, 2, 20, /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/, false)
    }
    
    if(inputCheck(req.body.placeOfResidence, 2, 20, /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/, false) == true){
        placeOfResidenceCheck = true
    } else{
        placeOfResidenceCheck = false
        placeOfResidenceProblem = inputCheck(req.body.lastName, 2, 20, /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/, false)
    }
    
    if(inputCheck(req.body.citizenship, 2, 25, /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/, false) == true){
        citizenshipCheck = true
    } else{
        citizenshipCheck = false
        citizenshipProblem = inputCheck(req.body.lastName, 2, 20, /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/), false
    }
    
    if(inputCheck(req.body.email, 7, 30, /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, false) == true){
        emailCheck = true
    } else{
        emailCheck = false
        emailProblem = inputCheck(req.body.email, 7, 30, /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, false)
    }
    
    if(inputCheck(req.body.phone, 7, 15, /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g, false) == true){
        phoneCheck = true
    } else{
        phoneCheck = false
        phoneProblem = inputCheck(req.body.phone, 7, 15, /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g, false)
    }
    
    if(inputCheck(req.body.programmingLanguages, 2, 150, /^[a-zA-ZğüşöçİĞÜŞÖÇ., ()#]+$/, false) == true){
        programmingLangCheck = true
    } else{
        programmingLangCheck = false
        programmingLangProblem = inputCheck(req.body.programmingLanguages, 2, 150, /^[a-zA-ZğüşöçİĞÜŞÖÇ., ()#]+$/, false)
    }
    
    if(inputCheck(req.body.frameworks, 2, 150, /^[a-zA-ZğüşöçİĞÜŞÖÇ., ()#]+$/, false) == true){
        frameworksCheck = true
    } else{
        frameworksCheck = false
        frameworksProblem = inputCheck(req.body.frameworks, 2, 150, /^[a-zA-ZğüşöçİĞÜŞÖÇ., ()#]+$/, false)
    }
    
    if(inputCheck(req.body.databases, 2, 150, /^[a-zA-ZğüşöçİĞÜŞÖÇ., ()#]+$/, false) == true){
        databasesCheck = true
    } else{
        databasesCheck = false
        databasesProblem = inputCheck(req.body.databases, 2, 150, /^[a-zA-ZğüşöçİĞÜŞÖÇ., ()#]+$/, false)
    }
    
    if(inputCheck(req.body.tools, 2, 150, /^[a-zA-ZğüşöçİĞÜŞÖÇ., ()#]+$/, false) == true){
        toolsCheck = true
    } else{
        toolsCheck = false
        toolsProblem = inputCheck(req.body.tools, 2, 150, /^[a-zA-ZğüşöçİĞÜŞÖÇ., ()#]+$/, false)
    }
    
    if(inputCheck(req.body.operatingSystems, 2, 150, /^[a-zA-ZğüşöçİĞÜŞÖÇ., ()#]+$/, false) == true){
        operatingSystemsCheck = true
    } else{
        operatingSystemsCheck = false
        operatingSystemsProblem = inputCheck(req.body.operatingSystems, 2, 150, /^[a-zA-ZğüşöçİĞÜŞÖÇ., ()#]+$/, false)
    }
    
    if(inputCheck(req.body.languages, 2, 150, /^[a-zA-ZğüşöçİĞÜŞÖÇ., ()#]+$/, false) == true){
        languagesCheck = true
    } else{
        languagesCheck = false
        languagesProblem = inputCheck(req.body.languages, 2, 150, /^[a-zA-ZğüşöçİĞÜŞÖÇ., ()#]+$/, false)
    }
    
    if(inputCheck(req.body.experience, 10, 500, /^[a-zA-ZğüşöçİĞÜŞÖÇ., ()#]+$/, false) == true){
        experienceCheck = true
    } else{
        experienceCheck = false
        experienceProblem = inputCheck(req.body.experience, 10, 500, /^[a-zA-ZğüşöçİĞÜŞÖÇ.,!? ()#]+$/, false)
    }

    if(firstNameCheck && lastNameCheck && genderCheck && placeOfBirthCheck && placeOfResidenceCheck && citizenshipCheck && emailCheck && phoneCheck && programmingLangCheck && frameworksCheck && databasesCheck && toolsCheck && operatingSystemsCheck && languagesCheck && experienceCheck){

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
        
    } else {

        res.send({
            status: false,
            message: req.lang.career_response_error,
            errors: [
                ["firstName", firstNameProblem],
                ["lastName", lastNameProblem], 
                ["gender", genderProblem], 
                ["dateOfBirth", dateOfBirthProblem], 
                ["placeOfBirth", placeOfBirthProblem], 
                ["placeOfResidence", placeOfResidenceProblem], 
                ["citizenship", citizenshipProblem], 
                ["email", emailProblem], 
                ["phone", phoneProblem], 
                ["programmingLanguages", programmingLangProblem], 
                ["frameworks", frameworksProblem], 
                ["databases", databasesProblem], 
                ["tools", toolsProblem], 
                ["operatingSystems", operatingSystemsProblem], 
                ["languages", languagesProblem], 
                ["experience", experienceProblem]
            ]
        })
        
    }
    
    
})

module.exports = router