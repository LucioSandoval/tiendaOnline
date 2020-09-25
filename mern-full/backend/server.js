 const dotenv =require('dotenv');
 dotenv.config();
const app = require('./app');
 const conexion = require('./db/database');
const {configApp,db} = require('./config');


const port = configApp.port;

async function initApp (){
 try {
    app.listen(port, ()=> console.log(`servidor iniciado en puerto ${port}`));
    await conexion(db.user,db.pass,db.dbName);
 } catch (error) {
     console.error(error);
     process.exit(0);
 }
}

initApp();
