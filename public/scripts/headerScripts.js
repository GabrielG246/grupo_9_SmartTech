window.addEventListener('load', function(){
    //BOTÓN DE CONFIGURACIÓN//
    let configButtonBar= document.querySelector('.button_options-container')
    let configButton= document.querySelector('.button-config')

    configButton.addEventListener('click', (e)=>{
        e.preventDefault()
        if(configButtonBar.style.display=='none'){
        configButtonBar.style.display = 'block'
        } else {
            configButtonBar.style.display= 'none'
        }
    });

        //BOTON(MENÚ) HAMBURGUESA//
    let burguerButtonMenu= document.querySelector('.buttonBurguer_list-container')
    let burguerButton= document.querySelector('.button-burger')

    burguerButton.addEventListener('click', ()=>{
        if(burguerButtonMenu.style.display=='none'){
            burguerButtonMenu.style.display='flex'
            burguerButton.style.backgroundColor= '#ECECEC'
            burguerButton.style.color='#506284'
            burguerButton.style.borderColor='black'
        } else {
            burguerButtonMenu.style.display='none'
            burguerButton.style.backgroundColor='#506284'
            burguerButton.style.color='white'
        }
    });

})