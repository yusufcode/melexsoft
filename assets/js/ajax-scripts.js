

document.querySelector('.contact-form input[type="submit"]').onclick = function(){
    
    const name = document.querySelector('.contact-form .name').value
    const surname = document.querySelector('.contact-form .surname').value
    const email = document.querySelector('.contact-form .email').value
    const number = document.querySelector('.contact-form .number').value
    const subject = document.querySelector('.contact-form .subject').value
    const message = document.querySelector('.contact-form .message').value

    AjaxSendMessage(name, surname, email, number, subject, message)

}

function AjaxSendMessage(name, surname, email, number, subject, message){

    const ajax = new XMLHttpRequest()
    ajax.open('POST', '/send-message', true)
    ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
    ajax.send(JSON.stringify({name, surname, email, number, subject, message}))
    ajax.onreadystatechange = handeRequestStateChange

    function handeRequestStateChange(){
        if(ajax.readyState == 4 && ajax.status == 200){
            const response = JSON.parse(ajax.response)
            if(response.status == false){
                alert(response.message)
            } else{
                alert(response.message)
                location.replace('/')
            }
        }
    }

}