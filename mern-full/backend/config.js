const config ={
    configApp:{
        port:process.env.APP_PORT,
        host:process.env.APP_HOST
    },
    db:{
        user: process.env.USER,
        pass:process.env.PASS,
        dbName:process.env.DBNAME
    }
}
module.exports = config;