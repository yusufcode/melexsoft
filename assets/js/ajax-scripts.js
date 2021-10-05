function inputCheck(text, element, minChar, maxChar, regex, select){
    
    if (minChar && text.length < minChar && minChar < maxChar && !select){
        element.classList.add('error')
        element.classList.add('more')

        element.classList.remove('less')
        element.classList.remove('empty')
        element.classList.remove('form')
        element.classList.remove('select')

        return 0
    } 
    
    if (maxChar && text.length > maxChar && maxChar > minChar && !select){
        element.classList.add('error')
        element.classList.add('less')

        element.classList.remove('more')
        element.classList.remove('empty')
        element.classList.remove('form')
        element.classList.remove('select')

        return 0
    }
    
    if (regex && !regex.test(text)){
        element.classList.add('error')
        element.classList.add('form')

        element.classList.remove('more')
        element.classList.remove('empty')
        element.classList.remove('less')
        element.classList.remove('select')

        return 0
    } 

    if (select && text.length < 1){
        element.classList.add('error')
        element.classList.add('select')

        element.classList.remove('more')
        element.classList.remove('empty')
        element.classList.remove('less')
        element.classList.remove('form')

        return 0
    } 
    
    else{
        element.classList.remove('error')
        element.classList.remove('empty')
        element.classList.remove('less')
        element.classList.remove('more')
        element.classList.remove('form')
        element.classList.remove('select')

        return 1
    }
    
}

//CONTACT MAIL
if(document.querySelector('.page-contact')){

    let useInputCheck = false

    document.querySelector('.page-contact .firstName').addEventListener('keyup', function(){
    
        const text = this.value
        const element = this.closest('.form-group')
        const regex = /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/
    
        if(useInputCheck){
            inputCheck(text, element, 2, 20, regex, false)
        }    
    
    })
    
    document.querySelector('.page-contact .lastName').addEventListener('keyup', function(){
    
        const text = this.value
        const element = this.closest('.form-group')
        const regex = /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/
    
        if(useInputCheck)[
            inputCheck(text, element, 2, 20, regex, false)
        ]
        
    })

    document.querySelector('.page-contact .email').addEventListener('keyup', function(){
    
        const text = this.value
        const element = this.closest('.form-group')
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
        if(useInputCheck){
            inputCheck(text, element, 2, 25, regex, false)
        }
        
    })
    
    document.querySelector('.page-contact .phone').addEventListener('keyup', function(){
    
        const text = this.value
        const element = this.closest('.form-group')
        const regex = /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g
    
        if(useInputCheck){
            inputCheck(text, element, 2, 25, regex, false)
        }
        
    })

    document.querySelector('.page-contact .subject').addEventListener('keyup', function(){
    
        const text = this.value
        const element = this.closest('.form-group')
        const regex = /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/
    
        if(useInputCheck)[
            inputCheck(text, element, 2, 20, regex, false)
        ]
        
    })

    document.querySelector('.page-contact .message').addEventListener('keyup', function(){
    
        const text = this.value
        const element = this.closest('.form-group')
        const regex = /^[a-zA-ZğüşöçİĞÜŞÖÇ.,?! ()#]+$/
    
        if(useInputCheck){
            inputCheck(text, element, 10, 500, regex, false)
        }
        
    })

    if(document.querySelector('.contact-form input[type="submit"]')){
    
        document.querySelector('.contact-form input[type="submit"]').onclick = function(){
    
            const firstName = document.querySelector('.page-contact .firstName').value
            const lastName = document.querySelector('.page-contact .lastName').value
            const email = document.querySelector('.page-contact .email').value
            const phone = document.querySelector('.page-contact .phone').value
            const subject = document.querySelector('.page-contact .subject').value
            const message = document.querySelector('.page-contact .message').value
        
            AjaxContact(firstName, lastName, email, phone, subject, message)
    
            document.querySelector('.page-contact .contact-form').style.display = 'none'
            document.querySelector('.page-contact .response-message').classList.add('sending')
            
        }
        
    }
    
    function AjaxContact(firstName, lastName, email, phone, subject, message){
    
        const ajax = new XMLHttpRequest()
        ajax.open('POST', '/contact', true)
        ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
        ajax.send(JSON.stringify({firstName, lastName, email, phone, subject, message}))
        ajax.onreadystatechange = handelRequestStateChange
    
        function handelRequestStateChange(){
            if(ajax.readyState == 4 && ajax.status == 200){
                const response = JSON.parse(ajax.response)
    
                if(response.status == false){
    
                    document.querySelector('.page-contact .contact-form').style.display = 'block'
                    document.querySelector('.page-contact .response-message').classList.remove('sending')
    
                    useInputCheck = true
    
                    for (let i = 0; i < response.errors.length; i++) {
                        
                        if(!document.querySelector(`.page-contact .${response.errors[i][0]}`).closest('.form-group').classList.contains('error') && response.errors[i][1] != null ){
                            document.querySelector(`.page-contact .${response.errors[i][0]}`).closest('.form-group').classList.add('error', `${response.errors[i][1]}`)
                        } else if(document.querySelector(`.page-contact .${response.errors[i][0]}`).closest('.form-group').classList.contains('error') && response.errors[i][1] == null){
                            document.querySelector(`.page-contact .${response.errors[i][0]}`).closest('.form-group').classList.remove('error', 'more', 'less', 'form', 'select')
                        }
                        
                    }
                    
                } else{
      
                    alert(response.message)
                    location.replace('/')
                }
    
            }
        }
    }
    
}

//JOB APPLICATION MAIL

if(document.querySelector('.page-career')){

    let useInputCheck = false
    
    document.querySelector('.page-career .firstName').addEventListener('keyup', function(){
    
        const text = this.value
        const element = this.closest('.form-group')
        const regex = /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/
    
        if(useInputCheck){
            inputCheck(text, element, 2, 20, regex, false)
        }    
    
    })
    
    document.querySelector('.page-career .lastName').addEventListener('keyup', function(){
    
        const text = this.value
        const element = this.closest('.form-group')
        const regex = /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/
    
        if(useInputCheck)[
            inputCheck(text, element, 2, 20, regex, false)
        ]
        
    })
    
    document.querySelector('.page-career .gender').addEventListener('change', function(){
    
        const text = this.value
        const element = this.closest('.form-group')
    
        if(useInputCheck)[
            inputCheck(text, element, false, false, false, true)
        ]
        
    })
    
    document.querySelector('.page-career .dateOfBirth').addEventListener('change', function(){
    
        const text = this.value
        const element = this.closest('.form-group')
        const regex = false
    
        if(useInputCheck)[
            inputCheck(text, element, false, false, false, true)
        ]
        
    })
    
    document.querySelector('.page-career .placeOfBirth').addEventListener('keyup', function(){
    
        const text = this.value
        const element = this.closest('.form-group')
        const regex = /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/
    
        if(useInputCheck){
            inputCheck(text, element, 2, 20, regex, false)
        }
        
    })
    
    document.querySelector('.page-career .placeOfResidence').addEventListener('keyup', function(){
    
        const text = this.value
        const element = this.closest('.form-group')
        const regex = /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/
    
        if(useInputCheck){
            inputCheck(text, element, 2, 20, regex, false)
        }
        
    })
    
    document.querySelector('.page-career .citizenship').addEventListener('keyup', function(){
    
        const text = this.value
        const element = this.closest('.form-group')
        const regex = /^[a-zA-ZğüşöçİĞÜŞÖÇ, ]+$/
    
        if(useInputCheck){
            inputCheck(text, element, 2, 25, regex, false)
        }
        
    })
    
    document.querySelector('.page-career .email').addEventListener('keyup', function(){
    
        const text = this.value
        const element = this.closest('.form-group')
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
        if(useInputCheck){
            inputCheck(text, element, 2, 25, regex, false)
        }
        
    })
    
    document.querySelector('.page-career .phone').addEventListener('keyup', function(){
    
        const text = this.value
        const element = this.closest('.form-group')
        const regex = /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g
    
        if(useInputCheck){
            inputCheck(text, element, 2, 25, regex, false)
        }
        
    })
    
    document.querySelector('.page-career .programmingLanguages').addEventListener('keyup', function(){
    
        const text = this.value
        const element = this.closest('.form-group')
        const regex = /^[a-zA-ZğüşöçİĞÜŞÖÇ., ()#]+$/
    
        if(useInputCheck){
            inputCheck(text, element, 2, 150, regex, false)
        }
        
    })
    
    document.querySelector('.page-career .frameworks').addEventListener('keyup', function(){
    
        const text = this.value
        const element = this.closest('.form-group')
        const regex = /^[a-zA-ZğüşöçİĞÜŞÖÇ., ()#]+$/
    
        if(useInputCheck){
            inputCheck(text, element, 2, 150, regex, false)
        }
        
    })
    
    document.querySelector('.page-career .databases').addEventListener('keyup', function(){
    
        const text = this.value
        const element = this.closest('.form-group')
        const regex = /^[a-zA-ZğüşöçİĞÜŞÖÇ., ()#]+$/
    
        if(useInputCheck){
            inputCheck(text, element, 2, 150, regex, false)
        }
        
    })
    
    document.querySelector('.page-career .tools').addEventListener('keyup', function(){
    
        const text = this.value
        const element = this.closest('.form-group')
        const regex = /^[a-zA-ZğüşöçİĞÜŞÖÇ., ()#]+$/
    
        if(useInputCheck){
            inputCheck(text, element, 2, 150, regex, false)
        }
        
    })
    
    document.querySelector('.page-career .operatingSystems').addEventListener('keyup', function(){
    
        const text = this.value
        const element = this.closest('.form-group')
        const regex = /^[a-zA-ZğüşöçİĞÜŞÖÇ., ()#]+$/
    
        if(useInputCheck){
            inputCheck(text, element, 2, 150, regex, false)
        }
        
    })
    
    document.querySelector('.page-career .languages').addEventListener('keyup', function(){
    
        const text = this.value
        const element = this.closest('.form-group')
        const regex = /^[a-zA-ZğüşöçİĞÜŞÖÇ., ()#]+$/
    
        if(useInputCheck){
            inputCheck(text, element, 2, 150, regex, false)
        }
        
    })
    
    document.querySelector('.page-career .experience').addEventListener('keyup', function(){
    
        const text = this.value
        const element = this.closest('.form-group')
        const regex = /^[a-zA-ZğüşöçİĞÜŞÖÇ.,?! ()#]+$/
    
        if(useInputCheck){
            inputCheck(text, element, 2, 500, regex, false)
        }
        
    })
    
    if(document.querySelector('.career-form input[type="submit"]')){
    
        document.querySelector('.career-form input[type="submit"]').onclick = function(){
    
            const firstName = document.querySelector('.page-career .firstName').value
            const lastName = document.querySelector('.page-career .lastName').value
            const gender = document.querySelector('.page-career .gender').value
            const dateOfBirth = document.querySelector('.page-career .dateOfBirth').value
            const placeOfBirth = document.querySelector('.page-career .placeOfBirth').value
            const placeOfResidence = document.querySelector('.page-career .placeOfResidence').value
            const citizenship = document.querySelector('.page-career .citizenship').value
            const email = document.querySelector('.page-career .email').value
            const phone = document.querySelector('.page-career .phone').value
            const programmingLanguages = document.querySelector('.page-career .programmingLanguages').value
            const frameworks = document.querySelector('.page-career .frameworks').value
            const databases = document.querySelector('.page-career .databases').value
            const tools = document.querySelector('.page-career .tools').value
            const operatingSystems = document.querySelector('.page-career .operatingSystems').value
            const languages = document.querySelector('.page-career .languages').value
            const experience = document.querySelector('.page-career .experience').value
        
            AjaxJobApplication(firstName, lastName, gender, dateOfBirth, placeOfBirth, placeOfResidence, citizenship, email, phone, programmingLanguages, frameworks, databases, tools, operatingSystems, languages, experience)
    
            document.querySelector('.page-career .career-form').style.display = 'none'
            document.querySelector('.page-career .response-message').classList.add('sending')
            
        }
        
    }
    
    function AjaxJobApplication(firstName, lastName, gender, dateOfBirth, placeOfBirth, placeOfResidence, citizenship, email, phone, programmingLanguages, frameworks, databases, tools, operatingSystems, languages, experience){
    
        const ajax = new XMLHttpRequest()
        ajax.open('POST', '/job-application', true)
        ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
        ajax.send(JSON.stringify({firstName, lastName, gender, dateOfBirth, placeOfBirth, placeOfResidence, citizenship, email, phone, programmingLanguages, frameworks, databases, tools, operatingSystems, languages, experience}))
        ajax.onreadystatechange = handelRequestStateChange
    
        function handelRequestStateChange(){
            if(ajax.readyState == 4 && ajax.status == 200){
                const response = JSON.parse(ajax.response)
    
                if(response.status == false){
    
                    document.querySelector('.page-career .career-form').style.display = 'block'
                    document.querySelector('.page-career .response-message').classList.remove('sending')
    
                    useInputCheck = true
    
                    for (let i = 0; i < response.errors.length; i++) {
                        
                        if(!document.querySelector(`.page-career .${response.errors[i][0]}`).closest('.form-group').classList.contains('error') && response.errors[i][1] != null ){
                            document.querySelector(`.page-career .${response.errors[i][0]}`).closest('.form-group').classList.add('error', `${response.errors[i][1]}`)
                        } else if(document.querySelector(`.page-career .${response.errors[i][0]}`).closest('.form-group').classList.contains('error') && response.errors[i][1] == null){
                            document.querySelector(`.page-career .${response.errors[i][0]}`).closest('.form-group').classList.remove('error', 'more', 'less', 'form', 'select')
                        }
                        
                    }
                    
                } else{
      
                    alert(response.message)
                    location.replace('/')
                }
    
            }
        }
    }
    
}

