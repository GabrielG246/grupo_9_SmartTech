//REQUIRES
const path= require('path');
const db= require('../database/models')
const bcrypt= require('bcrypt');
const { create } = require('domain');
const {validationResult}= require('express-validator');
const { compareSync } = require('bcrypt');

const controller={
    //FORMULARIO DE LOGUEO
    login: (req,res)=>{
        res.render('login')
    },

    //PROCESO DE LOGUEO
    loginPOST: async(req, res)=>{
        const user= await db.User.findOne( {where: {username: req.body.userNickName} } )

        if(user){
            if(bcrypt.compareSync(req.body.userPass, user.password)){
                req.session.user= user
                console.log(req.session.user)
            } else {
                res.json({error: 'Contraseña erronea'})
            }
        } else {
            res.json({error: 'Datos erroneos'})                                                        
        }
    },

    //FORMULARIO DE REGISTRO
    register: (req,res)=>{
        res.render('register')
    },

    //PROCESO DE REGISTRO
    registerPOST: (req, res)=>{

        //VALIDACIONES CON EXPRESS-VALIDATOR
        const {check, validationResult}= require('express-validator');
        

        //PROCESO DE CREACIÓN DE USUARIO
        let encryptPass= bcrypt.hashSync(req.body.userPass, 11)
        db.User.create({
            name: req.body.userName,
            last_name: req.body.userSName,
            email: req.body.userEmail,
            password: encryptPass,
            username: req.body.userNickName,
            roles_id: 1,
            userImage: req.file.path
        })

        res.redirect('/')
    },

    //LLAMADO A TODOS LOS USUARIOS
    getAll: async(req, res)=>{
        try {
            const users= await db.User.findAll({attributes:{exclude:['password','roles_id']},include:['role']});
            res.json(users);
            
        } catch (error) {
            res.json(error)
        }
    }

}

module.exports=controller;