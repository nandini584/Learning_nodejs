const express = require('express');
const router=express.Router();
const {getContacts, postContacts, getContact ,putContacts,deleteContacts}=require('../controllers/contactController')
router.route('/').get(getContacts).post(postContacts);
router.route('/:id').get(getContact).put(putContacts).delete(deleteContacts);
module.exports=router;
