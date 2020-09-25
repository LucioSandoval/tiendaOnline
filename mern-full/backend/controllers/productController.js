const e = require('express');
const Product= require('../models/Product');
const productController={};
productController.getProduct = async (req,res) =>{

        const product = await Product.find().lean().exec();
        res.json({products: product})
       
}

// Metodo de creacion de producto
productController.createProduct = async (req, res) =>{
 
 try {
     // extraemos del req.body las propiedades que se guardaran en la bd
    const { img,name, size, price, description}= req.body;

    // instancia al modelo para obtener las propiedades  y asignarle los nuevos valores 
    const product = new Product ({
        igm: img,
        name: name,
        size: size,
        price: price,
        description: description
   
    });

    if(req.file){
        const {image} = req.file;
        product.setImg(image);
    }
   
    // con el metodo save() guardo los datos 
    await product.save();
    res.send({message: 'producto creado'})
    
 } catch (error) {
    res.status(500).send({message: e.message});
 }

}

module.exports= productController;