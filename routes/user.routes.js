const express=require('express');
const router=express.Router();
const userController=require('../controllers/users.controllers');
const passport=require('passport')
router.use(passport.authenticate('jwt', { session: false }));

router.post('/home',userController.home)

module.exports=router