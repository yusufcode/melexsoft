document.querySelector('#master-head .navbar-right .select-language .current-language').addEventListener('click', function(){

    if(!document.querySelector('#master-head .navbar-right .select-language .other-languages').classList.contains('show')){
        document.querySelector('#master-head .navbar-right .select-language .other-languages').classList.add('show')
    } else{
        document.querySelector('#master-head .navbar-right .select-language .other-languages').classList.remove('show')
    }

})

function closeSelectLanguage(){
    document.querySelector('#master-head .navbar-right .select-language .other-languages').classList.remove('show')
}