const mongoose= require('mongoose');

const {configApp}=require('../config');
const productSchema = mongoose.Schema(
{
 img: String,
 name:String,
 size:String,
 price: Number,
 description: String
},
{
    timestamps:true
}
)

productSchema.methods.setImg = function setImg (image){
const {host, port}= configApp;
this.img= `${host}:${port}/public/${image}`;
}

module.exports= mongoose.model('Product', productSchema);