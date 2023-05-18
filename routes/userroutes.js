 const express=require('express');
 const router=express.Router();
 const {registerUser,loginUser,profile} = require('../controllers/userController');
 router.route("/register").post(registerUser)
 router.post("/login",loginUser)
 router.post("/profile",profile)
module.exports=router;