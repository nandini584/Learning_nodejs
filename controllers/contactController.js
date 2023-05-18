
const asynchandler=require('express-async-handler')
//@desc get all contacts 
//@route GET /api/contacts
//@access public
const getContacts=asynchandler(async(req,res)=>{
    res.status(200).json({message:'get all contacts'})
})


//@desc post all contacts 
//@route POST /api/contacts
//@access public
const postContacts=asynchandler(async(req,res)=>{
    console.log(req)
    console.log(req.body)
    const {name, phone, email}=req.body;
    if(!name || !phone || !email){
        res.status(400);
        throw new Error('All fields are required')
    }
    res.status(201).json({message:'post all contacts'})

})
//@desc get all contacts 
//@route GET /api/contacts/:id
//@access public
const getContact=asynchandler(async(req,res)=>{
    res.status(200).json({message:`get contact for ${req.params.id}`})
})
//@desc put all contacts 
//@route PUT /api/contacts/:id
//@access public

const putContacts=asynchandler(async(req,res)=>{
    res.status(200).json({message:`update contacts for ${req.params.id}`})
})
//@desc delete all contacts 
//@route DELETE /api/contacts
//@access public
const deleteContacts=asynchandler(async(req,res)=>{
    res.status(200).json({message:`delete contacts for ${req.params.id}`})
})
module.exports={postContacts, getContacts,getContact, putContacts, deleteContacts};