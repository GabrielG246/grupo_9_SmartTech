    const registerValidator=
    [check('userName')
        .notEmpty().withMessage('Debe ingresar un nombre').bail()
        .isLength({min:2}).withMessage('Nombre debe tener más de 2 caracteres').bail(),
    check('userSName')
        .notEmpty().withMessage('Debe ingresar un apellido').bail()
        .isLength({min:2}).withMessage('Apellido debe tener más de 2 caracteres').bail(),
    check('userEmail')
        .notEmpty().withMessage('Debe ingresar un email').bail()
        .isEmail().withMessage('Debe ingresar un email valido').bail(),
    check('userNickName')
        .notEmpty().withMessage('Debe ingresar un nombre de usuario').bail()
        .isLength({min:5}).withMessage('Su nickname debe tener mas de 5 caracteres').bail(),
    check('userPass')
        .notEmpty().withMessage('Debe ingresar una contraseña').bail()
        .isLength({min:8}).withMessage('Su contraseña debe tener mas de 8 caracteres').bail()
    ]



module.exports= registerValidator