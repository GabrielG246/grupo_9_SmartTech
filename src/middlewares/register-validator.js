function registerValidator(req, res, next){
    
    const registerVali= [check('userName').notEmpty().withMessage('Debe ingresar un nombre').bail(),
    check('userSName').notEmpty().withMessage('Debe ingresar un apellido').bail(),
    check('userEmail')
        .notEmpty().withMessage('Debe ingresar un email').bail()
        .isEmail().withMessage('Debe ingresar un email valido').bail(),
    check('userNickName').notEmpty().withMessage('Debe ingresar un nombre de usuario').bail(),
    check('userPass')
        .notEmpty().withMessage('Debe ingresar una contraseña').bail()
        .isLength({min:8}).withMessage('Su contraseña debe tener mas de 8 caracteres').bail()
    ]

}
