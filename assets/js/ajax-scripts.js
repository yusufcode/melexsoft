

// document.querySelector('.contact-form input[type="submit"]').onclick = function(){
    
//     const name = document.querySelector('.contact-form .name').value
//     const surname = document.querySelector('.contact-form .surname').value
//     const email = document.querySelector('.contact-form .email').value
//     const number = document.querySelector('.contact-form .number').value
//     const subject = document.querySelector('.contact-form .subject').value
//     const message = document.querySelector('.contact-form .message').value

//     AjaxSendMessage(name, surname, email, number, subject, message)

// }

// function AjaxSendMessage(name, surname, email, number, subject, message){

//     const ajax = new XMLHttpRequest()
//     ajax.open('POST', '/send-message', true)
//     ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
//     ajax.send(JSON.stringify({name, surname, email, number, subject, message}))
//     ajax.onreadystatechange = handeRequestStateChange

//     function handeRequestStateChange(){
//         if(ajax.readyState == 4 && ajax.status == 200){
//             const response = JSON.parse(ajax.response)
//             if(response.status == false){
//                 alert(response.message)
//             } else{
//                 alert(response.message)
//                 location.replace('/')
//             }
//         }
//     }

// }

//CONTACT FORM CHECK
function standardCheck(text, element){

    if(text.length == 0){
        element.classList.add('error')
        element.classList.add('empty')

        element.classList.remove('less')
        element.classList.remove('more')
        element.classList.remove('form')
    } else if (text.length < 2){
        element.classList.add('error')
        element.classList.add('more')

        element.classList.remove('less')
        element.classList.remove('empty')
        element.classList.remove('form')
    } else if (text.length > 20){
        element.classList.add('error')
        element.classList.add('less')

        element.classList.remove('more')
        element.classList.remove('empty')
        element.classList.remove('form')
    } else if (!/^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/.test(text)){
        element.classList.add('error')
        element.classList.add('form')

        element.classList.remove('more')
        element.classList.remove('empty')
        element.classList.remove('less')
    } else{
        element.classList.remove('error')
        element.classList.remove('empty')
        element.classList.remove('less')
        element.classList.remove('more')
        element.classList.remove('form')
    }
    
}
document.querySelector('.contact-form .name').addEventListener('keyup', function(){

    const textDefault = this.value
    const text = textDefault.trim()

    const element = document.querySelector('.contact-form .name').closest('.form-group')
    
})

// function checkContactForm(){

//     const name = document.querySelector('.contact-form .name').value
//     const surname = document.querySelector('.contact-form .surname').value
//     const email = document.querySelector('.contact-form .email').value
//     const number = document.querySelector('.contact-form .number').value
//     const subject = document.querySelector('.contact-form .subject').value
//     const message = document.querySelector('.contact-form .message').value


    
// }

// document.querySelector('.contact-form input[type="submit"]').addEventListener('click', checkContactForm)



