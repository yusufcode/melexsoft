//SHOW OR HIDE SELECT LANGUAGE DROPDOWN MENU
document.querySelector('#master-head .select-language .current-language').addEventListener('click', function(){

    if(!document.querySelector('#master-head .select-language .other-languages').classList.contains('show')){
        document.querySelector('#master-head .select-language .other-languages').classList.add('show')
    } else{
        document.querySelector('#master-head .select-language .other-languages').classList.remove('show')
    }

})

//SELECT & CHANGE LANGUAGE
function activateLanguage(language){

    document.querySelector('#master-head .select-language .other-languages li.active').classList.remove('active')
    language.classList.add('active')

    const newLanguage = language.getAttribute('lang')

    const ajax = new XMLHttpRequest()
    ajax.open('POST', 'changeLanguage/'+newLanguage+'', true)
    ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
    ajax.send()

    ajax.onreadystatechange = function(){
        if(ajax.readyState === 4){
            const response = JSON.parse(ajax.response)

            if(response.status == true){
                const currentUrl = window.location.href
                window.location = currentUrl
            } 
        }
    }

}

//LIGHTGALLERY
const galleries = document.querySelectorAll('.lightgallery')
for (let i = 0; i < galleries.length; i++) {
    
    lightGallery(galleries[i], {
        plugins: [lgZoom],
        download: false
    });
    
}

//TYPED.JS
const typed = new Typed('#typed', {
    strings: ["NFT", "BlockChain"],
    typeSpeed: 115,
    backSpeed: 32,
    loop: true
})




