const path= require('path');
const db= require('../database/models')

const controller={
    login: (req,res)=>{
        res.render('login')
    },
    register: (req,res)=>{
        res.render('register')
    },
    getAll: async(req, res)=>{
        try {
            const users= await db.User.findAll({attributes:{exclude:['password','roles_id']},include:['role']});
            res.render("allUsers",{users:users});
            
        } catch (error) {
            res.json(error)
        }
    }


}

module.exports=controller;