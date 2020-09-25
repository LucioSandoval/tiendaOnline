const express= require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes= require('./routes/productRoute');
const app = express();
app.use(cors());
app.use(express.json());


app.use(bodyParser.urlencoded({extended: false}));
app.use('/public', express.static(`${__dirname}/storage/images`));
app.use('/product', productRoutes);






module.exports = app;