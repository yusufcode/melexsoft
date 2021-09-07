//CONTACT FORM CHECK
let nameControl = 0
let surnameControl = 0
let emailControl = 0
let numberControl = 0
let subjectControl = 0
let messageControl = 0

function nameCheck(text, element){

    if(text.length == 0){
        element.classList.add('error')
        element.classList.add('empty')

        element.classList.remove('less')
        element.classList.remove('more')
        element.classList.remove('form')

        return 0
    } else if (text.length < 2){
        element.classList.add('error')
        element.classList.add('more')

        element.classList.remove('less')
        element.classList.remove('empty')
        element.classList.remove('form')

        return 0
    } else if (text.length > 20){
        element.classList.add('error')
        element.classList.add('less')

        element.classList.remove('more')
        element.classList.remove('empty')
        element.classList.remove('form')

        return 0
    } else if (!/^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/.test(text)){
        element.classList.add('error')
        element.classList.add('form')

        element.classList.remove('more')
        element.classList.remove('empty')
        element.classList.remove('less')

        return 0
    } else{
        element.classList.remove('error')
        element.classList.remove('empty')
        element.classList.remove('less')
        element.classList.remove('more')
        element.classList.remove('form')

        return 1
    }
    
}

function emailCheck(text, element){

    if(text.length == 0){
        element.classList.add('error')
        element.classList.add('empty')

        element.classList.remove('less')
        element.classList.remove('more')
        element.classList.remove('form')

        return 0
    } else if (text.length < 6){
        element.classList.add('error')
        element.classList.add('more')

        element.classList.remove('less')
        element.classList.remove('empty')
        element.classList.remove('form')

        return 0
    } else if (text.length > 50){
        element.classList.add('error')
        element.classList.add('less')

        element.classList.remove('more')
        element.classList.remove('empty')
        element.classList.remove('form')

        return 0
    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(text)){
        element.classList.add('error')
        element.classList.add('form')

        element.classList.remove('more')
        element.classList.remove('empty')
        element.classList.remove('less')

        return 0
    } else{
        element.classList.remove('error')
        element.classList.remove('empty')
        element.classList.remove('less')
        element.classList.remove('more')
        element.classList.remove('form')

        return 1
    }
    
}

function numberCheck(text, element){

    if(text.length == 0){
        element.classList.add('error')
        element.classList.add('empty')

        element.classList.remove('less')
        element.classList.remove('more')
        element.classList.remove('form')

        return 0
    } else if (text.length < 7){
        element.classList.add('error')
        element.classList.add('more')

        element.classList.remove('less')
        element.classList.remove('empty')
        element.classList.remove('form')

        return 0
    } else if (text.length > 20){
        element.classList.add('error')
        element.classList.add('less')

        element.classList.remove('more')
        element.classList.remove('empty')
        element.classList.remove('form')

        return 0
    } else if (!/^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g.test(text)){
        element.classList.add('error')
        element.classList.add('form')

        element.classList.remove('more')
        element.classList.remove('empty')
        element.classList.remove('less')

        return 0
    } else{
        element.classList.remove('error')
        element.classList.remove('empty')
        element.classList.remove('less')
        element.classList.remove('more')
        element.classList.remove('form')

        return 1
    }
    
}

function subjectCheck(text, element){

    if(text.length == 0){
        element.classList.add('error')
        element.classList.add('empty')

        element.classList.remove('less')
        element.classList.remove('more')
        element.classList.remove('form')

        return 0
    } else if (text.length < 3){
        element.classList.add('error')
        element.classList.add('more')

        element.classList.remove('less')
        element.classList.remove('empty')
        element.classList.remove('form')

        return 0
    } else if (text.length > 20){
        element.classList.add('error')
        element.classList.add('less')

        element.classList.remove('more')
        element.classList.remove('empty')
        element.classList.remove('form')

        return 0
    } else if (!/^[a-zA-ZğüşöçİĞÜŞÖÇ?!]+$/.test(text)){
        element.classList.add('error')
        element.classList.add('form')

        element.classList.remove('more')
        element.classList.remove('empty')
        element.classList.remove('less')

        return 0
    } else{
        element.classList.remove('error')
        element.classList.remove('empty')
        element.classList.remove('less')
        element.classList.remove('more')
        element.classList.remove('form')

        return 1
    }
    
}

function messageCheck(text, element){

    if(text.length == 0){
        element.classList.add('error')
        element.classList.add('empty')

        element.classList.remove('less')
        element.classList.remove('more')
        element.classList.remove('form')

        return 0
    } else if (text.length < 10){
        element.classList.add('error')
        element.classList.add('more')

        element.classList.remove('less')
        element.classList.remove('empty')
        element.classList.remove('form')

        return 0
    } else if (text.length > 500){
        element.classList.add('error')
        element.classList.add('less')

        element.classList.remove('more')
        element.classList.remove('empty')
        element.classList.remove('form')

        return 0
    } else if (!/^[a-zA-Z0-9ğüşöçİĞÜŞÖÇ?!.,;:()/]+$/.test(text)){
        element.classList.add('error')
        element.classList.add('form')

        element.classList.remove('more')
        element.classList.remove('empty')
        element.classList.remove('less')

        return 0
    } else{
        element.classList.remove('error')
        element.classList.remove('empty')
        element.classList.remove('less')
        element.classList.remove('more')
        element.classList.remove('form')

        return 1
    }
    
}

const allInputs = document.querySelectorAll('.contact-form input, .contact-form textarea')
for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener('keyup',function(){

        const textDefault = this.value
        const text = textDefault.trim()
        const element = this.closest('.form-group')
        const functionName = this.classList[1]

        if(functionName == 'name'){
            nameControl = nameCheck(text, element)
        } else if (functionName == 'surname'){
            surnameControl = nameCheck(text, element)
        } else if (functionName == 'email'){
            emailControl = emailCheck(text, element)
        } else if (functionName == 'number'){
            numberControl = numberCheck(text, element)
        } else if (functionName == 'subject'){
            subjectControl = subjectCheck(text, element)
        } else if (functionName == 'message'){
            messageControl = messageCheck(text, element)
        } 
        
        if(nameControl && surnameControl && emailControl && numberControl && subjectControl && messageControl){
            document.querySelector('.contact-form input[type="submit"]').classList.remove('disabled')
        } else{
            document.querySelector('.contact-form input[type="submit"]').classList.add('disabled')
        }
        
    })
}

if(document.querySelector('.contact-form input[type="submit"]')){

    document.querySelector('.contact-form input[type="submit"]').onclick = function(){

        const name = document.querySelector('.contact-form .name')
        const surname = document.querySelector('.contact-form .surname')
        const email = document.querySelector('.contact-form .email')
        const number = document.querySelector('.contact-form .number')
        const subject = document.querySelector('.contact-form .subject')
        const message = document.querySelector('.contact-form .message')
    
        if(nameControl && surnameControl && emailControl && numberControl && subjectControl && messageControl){
            
            document.querySelector('.contact-form').style.display = 'none'
            document.querySelector('.page-contact .response-message').classList.add('sending')
            
            AjaxSendMessage(name.value, surname.value, email.value, number.value, subject.value, message.value)
    
            for (let i = 0; i < allInputs.length; i++) {
                allInputs[i].value = ''
                allInputs[i].closest('.form-group').classList.remove('error')
            }
            
        } else{
            nameCheck(name.value, name.closest('.form-group'))
            nameCheck(surname.value, surname.closest('.form-group'))
            emailCheck(email.value, email.closest('.form-group'))
            numberCheck(number.value, number.closest('.form-group'))
            subjectCheck(subject.value, subject.closest('.form-group'))
            messageCheck(message.value, message.closest('.form-group'))
        }
    
    }
    
}

function AjaxSendMessage(name, surname, email, number, subject, message){

    const ajax = new XMLHttpRequest()
    ajax.open('POST', '/send-message', true)
    ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
    ajax.send(JSON.stringify({name, surname, email, number, subject, message}))
    ajax.onreadystatechange = handelRequestStateChange

    function handelRequestStateChange(){
        if(ajax.readyState == 4 && ajax.status == 200){
            const response = JSON.parse(ajax.response)
            if(response.status == false){
                document.querySelector('.page-contact .response-message').classList.remove('sending')
                document.querySelector('.page-contact .response-message').classList.add('error')
                alert(response.message)
            } else{
                document.querySelector('.page-contact .response-message').classList.remove('sending')
                document.querySelector('.page-contact .response-message').classList.add('success')
                alert(response.message)
                location.replace('/')
            }
        }
    }

}

