window.addEventListener('load', function(){

    const buttonDelete= document.querySelector('.userEdit_delete-a');
    const buttonCancelDelete= document.querySelector('.button_cancel');
    const deleteFormContainer= document.querySelector('.userDeleteConfirm_container')

    buttonDelete.addEventListener('click', function(e){
        e.preventDefault()
        deleteFormContainer.style.display='flex'
    })

    buttonCancelDelete.addEventListener('click', function(){
        deleteFormContainer.style.display='none'
    })

})