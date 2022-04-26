//REQUIRES
const express= require('express');
const multer= require('multer')
const path= require('path')
const router= express.Router();
const {check}= require('express-validator')

//CONTROLLERS
const userController= require('../controllers/userController');
const { register } = require('../controllers/userController');

//MULTER SETTINGS
const storage= multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/img/usersImages'))
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname+'-'+Date.now()+path.extname(file.originalname))
    }
});
const upload= multer({storage});
//FIN DE MULTER SETTINGS


//VALIDACIONES
const registerValidator= [check('userName')
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

const loginValidator=[
    check('userNickName').notEmpty().withMessage('Debe ingresar un nombre de usuario'),
    check('userPass').notEmpty().withMessage('Debe ingresar una contraseña')
]
//FIN DE VALIDACIONES


//USUARIOS
router.get('/allUsers', userController.getAll);

//FORMULARIO DE LOGUEO
router.get("/login", userController.login);

//PROCESO DE LOGUEO
router.post('/login', loginValidator, userController.loginPOST)

//FORMULARIO DE REGISTRO
router.get("/register" ,userController.register);

//PROCESO DE REGISTRO
router.post('/register',upload.single('userImage'),registerValidator, userController.registerPOST);

//USUARIO
router.get('/profile', userController.user)

//CERRAR SESSION//
router.get('/logOut', userController.logOut)

//FORMULARIO DE EDICION DE USUARIO//
router.get('/profile/edit', userController.userEditForm)



module.exports= router;