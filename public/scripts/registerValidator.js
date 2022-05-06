window.addEventListener('load', function(){

    //EVENTO DE ENVÍO//
    let registerForm= document.querySelector('form')

    registerForm.addEventListener('submit', function(e){
        e.preventDefault();

        //NOMBRE VALIDATION//
        let nameField= document.querySelector('#name_label')

        if(nameField.value == ''){
            nameField.style.border= 'solid 2px red'
        }

    })

})