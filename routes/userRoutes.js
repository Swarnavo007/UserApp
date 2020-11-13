const express=require('express');
const route=express.Router();

const controller=require('../controller/userController');

route.get('/users',controller.getUser);

route.post('/users',controller.createUser);

route.get('/users/',controller.getOneUser);

route.patch('/users/',controller.updateUser);

route.delete('/users/',controller.deleteUser);

module.exports=route;

