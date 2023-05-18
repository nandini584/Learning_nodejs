const asynchandler=require('express-async-handler')
//@desc register the user
//@route POST /api/contacts/register
//@access public
const registerUser=asynchandler(async (req,res)=>{
    res.json({message:"register the user"})
})
//@desc login the user
//@route POST /api/contacts/login
//@access public
const loginUser=asynchandler(async (req,res)=>{
    res.json({message:"login the user"})
})
//@desc current userinfo
//@route POST /api/contacts/profile
//@access private
const profile=asynchandler(async (req,res)=>{
    res.json({message:"current userinfo"})
})
module.exports={ registerUser, loginUser, profile }
