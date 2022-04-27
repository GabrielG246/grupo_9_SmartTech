const express= require('express');
const router= express.Router();
const apiUserController= require('../../controllers/api/userController');


router.get('/api/users', apiUserController.getAll);
router.get('/api/users/:id', apiUserController.detail);


module.exports= router;