const Contact=require("../models/contactModel")
const asynchandler=require('express-async-handler')
//@desc get all contacts 
//@route GET /api/contacts
//@access public
const getContacts=asynchandler(async(req,res)=>{
    const contacts=await Contact.find();
    res.status(200).json(contacts)
})


//@desc post all contacts 
//@route POST /api/contacts
//@access public
const postContacts=asynchandler(async(req,res)=>{
      const {name, phone, email}=req.body;
    if(!name || !phone || !email){
        res.status(400);
        throw new Error('All fields are required')
    }
    const contacts=await Contact.create({
        name,  
        phone,
        email,
});
    res.status(201).json(contacts)

})
//@desc get all contacts 
//@route GET /api/contacts/:id
//@access public
const getContact=asynchandler(async(req,res)=>{
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found")
    }
    res.status(200).json(contact)
})
//@desc put all contacts 
//@route PUT /api/contacts/:id
//@access public

const putContacts=asynchandler(async(req,res)=>{
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found")
    }
    const updatedcontact= await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true
        }
    )
    res.status(200).json({message:`update contacts for ${req.params.id}`})
})
//@desc delete all contacts 
//@route DELETE /api/contacts
//@access public
const deleteContacts=asynchandler(async(req,res)=>{
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found")
    }
    await Contact.remove();
    res.status(200).json(contact)
})
module.exports={postContacts, getContacts,getContact, putContacts, deleteContacts};