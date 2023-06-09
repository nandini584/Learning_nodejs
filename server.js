const express=require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv=require('dotenv').config();
connectDb();
const app = express();
const port=process.env.PORT || 5000;
app.use(express.json())
app.use('/api/contacts', require('./routes/contactroutes'))
app.use('/api/user', require('./routes/userroutes'))
app.use(errorHandler)
app.listen(port, ()=>{
console.log("server is up and running")
})