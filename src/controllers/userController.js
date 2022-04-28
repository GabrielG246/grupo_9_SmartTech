//REQUIRES
const path = require("path");
const db = require("../database/models");
const bcrypt = require("bcrypt");
const { create } = require("domain");
const { validationResult } = require("express-validator");
const { compareSync } = require("bcrypt");
const session = require("express-session");

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
    req.session.user = undefined;
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
    res.render("userEdit", {
      userLogged: session.userLogged,
    });
  },



  userEditForm:(req, res)=>{
      res.render('userEditForm', {userLogged: session.userLogged})
  }
};

module.exports = controller;
