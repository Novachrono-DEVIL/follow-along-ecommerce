const express= require('express')

const app= express();

if(process.env.NODE)
require('dotenv').config("path:'./back-end/Config/.env'")

module.exports=app;