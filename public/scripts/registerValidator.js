window.addEventListener('load', function(){

    //EVENTO DE ENVÍO//
    let registerForm= document.querySelector('form')

    registerForm.addEventListener('submit', function(e){

        let errores= []

        //---NAME VALIDATION---//
        let nameField= document.querySelector('#name_label')

        if(nameField.value == ''){
            errores.push('El campo de nombre no puede quedar vacío')
        } 
        else if(nameField.value.length < 3){
            errores.push('El campo de nombre no debe contener menos de tres carácteres')
        }
        //END OF NAME VALIDATION//
        
        //---LASTNAME VALIDATION---//
        let lastNameField= document.querySelector('#lastName_label');

        if(lastNameField.value == ''){
            errores.push('El campo de apellido no puede quedar vacío')
        } 
        else if(lastNameField.value.length < 3){
            errores.push('El campo de apellido no debe contener menos de 3 carácteres')
        }
        //END OF LASTNAME VALIDATION//

        //---EMAIL VALIDATION---//
        let emailField= document.querySelector('#email_label');

        if(emailField.value == ''){
            errores.push('El campo de email no puede quedar vacío')
        }
        //END OF EMAIL VALIDATION//
        
        //---USERNAME VALIDATION---//
        let userNameField= document.querySelector('#user_label');

        if(userNameField.value == ''){
            errores.push('El campo de usuario no puede quedar vacío')
        } 
        else if(userNameField.value.length < 6){
            errores.push('El campo de usuario no debe contener menos de 6 carácteres')
        }
        //END OF USERNAME VALIDATION//

        //---PASSWORD VALIDATION//
        let passField= document.querySelector('#pass_label');

        if(passField.value == ''){
            errores.push('El campo de contraseña no puede quedar vacío')
        } 
        else if(passField.value.length < 8){
            errores.push('El campo de contraseña no debe contener menos de 8 carácteres')
        }
        //END OF PASSWORD VALIDATION//

        if(errores.length>0){
            e.preventDefault();

            let errorsContainer= document.querySelector('.errorsContainer ul');

            for(let i=0; i<errores.length; i++){
                errorsContainer.innerHTML += '<li>'+errores[i]+'</li>'
            }
        }
    })

})