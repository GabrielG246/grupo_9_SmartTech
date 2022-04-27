const path = require('path');
const db = require('../../database/models');

const controller = {

    getAll: async (req, res) => {
        try {
            const users = await db.User.findAll({ attributes: { exclude: ['password', 'username', 'roles_id', 'userImage'] } });

            let usersResponse= users.map(user=>({
                id: user.id ,
                name: user.name,
                email: user.email,
                detail: `/api/users/${user.id}`
            }))


            res.status(200).json(
                {

                    count: users.length,
                    users: usersResponse,

                })
        } catch (error) {
            res.status(500).json(error)
        }
    },

    detail: (req, res) => {
        db.User.findByPk(req.params.id, { attributes: { exclude: ['password','roles_id'] } })
            .then(user => {
                res.status(200).json(
                    {

                        data: user,
                        url: req.originalUrl
                    })
            })
            .catch(err => res.status(500).json(err))
    }
}

module.exports = controller;




