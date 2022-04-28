const path = require('path');
const db = require('../../database/models');

const controller = {

    getAll: async (req, res) => {
        try {
            const users = await db.User.findAll({ attributes: { exclude: ['password', 'username', 'roles_id', 'userImage'] } });

            let usersResponse = users.map(user => ({
                id: user.id,
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

    detail: async (req, res) => {

        try {
            let user = await db.User.findByPk(req.params.id, { attributes: { exclude: ['password', 'roles_id'] } })

            user = {
                id: user.id,
                name: user.name,
                last_name: user.last_name,
                email: user.email,
                username: user.username,
                userImage: `localhost:3005/img/usersImages/${user.userImage}`
            }
            res.status(200).json(
                {

                    data: user,
                    url: req.originalUrl
                })



        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = controller;




