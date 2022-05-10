//REQUIRES
const path = require("path");
const db = require("../database/models");
const bcrypt = require("bcrypt");
const { create } = require("domain");
const { validationResult } = require("express-validator");
const { compareSync } = require("bcrypt");
const session = require("express-session");
const { json, cookie } = require("express/lib/response");

const controller = {
  //FORMULARIO DE LOGUEO
  login: (req, res) => {
    res.render("login");
  },



  //PROCESO DE LOGUEO
  loginPOST: (req, res) => {
    let errors = validationResult(req);

    db.User.findOne({ where: { username: req.body.userNickName } }).then(
      function (user) {
        if (user) {
          if (bcrypt.compareSync(req.body.userPass, user.password)) {
            delete user.password;
            session.userLogged = user;

            if (req.body.userRememberMe != undefined) {
              res.cookie('rememberMe', session.userLogged.userNickName, { maxAge: 120000 })
            }

            res.redirect("/users/profile");
          } else {
            res.render("login", {
              errors: {
                userNickName: {
                  msg: "Contraseña erronea",
                },
              },
            });
          }
        } else {
          res.render("login", {
            errors: {
              userPass: {
                msg: "Datos erroneos",
              },
            },
          });
        }
      }
    );
  },


  //FORMULARIO DE REGISTRO
  register: (req, res) => {
    res.render("register");
  },



  //PROCESO DE REGISTRO
  registerPOST: (req, res) => {
    let errors = validationResult(req);

    const userNName = db.User.findOne({
      where: { username: req.body.userNickName },
    });

    if (errors.isEmpty()) {
      db.User.findOne({ where: { email: req.body.userEmail } }).then(function (
        userEmailInUse
      ) {
        if (userEmailInUse) {
          res.render("register", {
            errors: {
              userEmail: {
                msg: "Este email ya está en uso",
              },
            },
            old: req.body,
          });
        } else if (userNName == req.body.userNickName) {
          res.render("register", {
            errors: {
              userNickName: {
                msg: "Este nombre de usuario ya está en uso",
              },
            },
            old: req.body,
          });
        } else {
          let encryptPass = bcrypt.hashSync(req.body.userPass, 11);
          let userImage;

          if (req.file) {
            userImage = req.file.filename;
          } else {
            userImage = "defaultUserImage.png";
          }

          db.User.create({
            name: req.body.userName,
            last_name: req.body.userSName,
            email: req.body.userEmail,
            password: encryptPass,
            username: req.body.userNickName,
            roles_id: 1,
            userImage: userImage,
          });

          res.redirect("/users/login");
        }
      });
    } else {
      res.render("register", { errors: errors.mapped(), old: req.body });
    }
  },



  //CERRAR SESIÓN//
  logOut: (req, res) => {
    session.userLogged = undefined;
    res.redirect("/");
  },



  //LLAMADO A TODOS LOS USUARIOS
  getAll: async (req, res) => {
    try {
      const users = await db.User.findAll({
        attributes: { exclude: ["password", "roles_id"] },
        include: ["role"],
      });
      res.json(users);
    } catch (error) {
      res.json(error);
    }
  },




  user: (req, res) => {
    res.render('userEdit', { userLogged: session.userLogged })
  },



  userEditFormGET: (req, res) => {
    res.render('userEditForm', { userLogged: session.userLogged })
  },

  userEditFormPUT: (req, res) => {
    let errors = validationResult(req)

    let userNameInUse;
    let emailInUse;

    //VERIFICACIÓN DE USERNAME//
    db.User.findOne({ where: { username: req.body.userNickName } })
      .then(function (username) {
        if (username != undefined) { userNameInUse = true }
      })


    //VERIFICACIÓN DE EMAIL//
    db.User.findOne({ where: { email: req.body.userEmail } })
      .then(function (userEmail) {
        if (userEmail != undefined) { emailInUse = true }
      })

    db.User.findOne({ where: { username: session.userLogged.username } })
      .then(
        function (userEdit) {

          if (userEdit == undefined) {
            res.status(404).send('Not found')
          }
          //VERIFICACIÓN DE NOMBRE DE USUARIO//
          else if (userNameInUse && req.body.userNickName != session.userLogged.username) {
            console.log('Nombre de usuario en uso')
            res.render('userEditForm', { userLogged: session.userLogged, errors: { userNickName: { msg: 'Nombre de usuario ya está en uso' } }, old: req.body });
          }

          //VERIFICACIÓN DE EMAIL//
          else if (emailInUse && req.body.userEmail != session.userLogged.email) {
            console.log('Email en uso')
            res.render('userEditForm', { userLogged: session.userLogged, errors: { userEmail: { msg: 'Este email ya está en uso' } }, old: req.body });
          }

          //VERIFICACIÓN DE CONTRASEÑA//
          else if (bcrypt.compareSync(req.body.userOldPass, userEdit.password)) {

            //SELECCIÓN DE CONTRASEÑA//
            let encryptPass = bcrypt.hashSync(req.body.userNewPass, 12)
            let newPassword;
            req.body.userNewPass ? newPassword = encryptPass : newPassword = userEdit.password;

            //SELECCIÓN DE IMAGEN//
            let userImage;
            req.file ? userImage = req.file.filename : userImage = session.userLogged.userImage;


            //PROCESO DE EDICIÓN//
            db.User.update(

              {
                name: req.body.userName,
                last_name: req.body.userSName,
                email: req.body.userEmail,
                password: newPassword,
                username: req.body.userNickName,
                userImage: userImage
              },
              {
                where: { username: session.userLogged.username }
              })
              .then(function () {

                db.User.findOne({ where: { username: req.body.userNickName } })
                  .then(function (editedUser) {
                    delete editedUser.password;
                    session.userLogged = editedUser;



                    console.log(editedUser)
                    res.redirect('/users/profile')
                  })
              })

          }

          else {

            res.render('userEditForm', { userLogged: session.userLogged, errors: { userOldPass: { msg: 'Contraseña Incorrecta' } }, old: req.body });

          }
        })


  },


  userEditDELETE: (req, res) => {

    const errors= validationResult(req)

    db.User.findOne({ where: { username: session.userLogged.username } })
      .then(function (userToDelete) {
        if (bcrypt.compareSync(req.body.userDeleteConfirm_pass, userToDelete.password)) {

          db.User.destroy({ where: { username: session.userLogged.username } })

          session.userLogged = undefined

          res.redirect('/')

        }
        else {
          res.render('userEdit', {userLogged: session.userLogged, errors: { userPass: { msg: 'Contraseña errónea' } } })
        }
      })

  }
};

module.exports = controller;
