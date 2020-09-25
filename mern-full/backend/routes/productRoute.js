const express= require('express');
const upload = require('../libs/storage');
const api=express.Router();
const {getProduct, createProduct} =  require('../controllers/productController')

api.get('/lista',getProduct);

api.post('/create',upload.single('image'), createProduct );

module.exports=api;