const express=require('express');
const router=express.Router();
const adminController=require('../controllers/admin.controllers');
const passport=require('passport')
router.use(passport.authenticate('jwt', { session: false }));

router.post("/addBook",adminController.addBook)

router.post("/deleteBook",adminController.deleteBook)


module.exports=router