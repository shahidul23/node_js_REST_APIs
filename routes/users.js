import express from 'express';

import {createUser,getUsers,getUser,deleteUsers,getUpdateUser} from '../Controllers/userController.js';

const router = express.Router();
router.get('/',getUsers );
router .post('/',createUser);
router.get('/:id',getUser);
router.delete('/:id',deleteUsers);
router.patch('/:id',getUpdateUser);
export default router;