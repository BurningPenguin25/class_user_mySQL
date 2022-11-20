const Sequelize = require("sequelize");
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DBNAME , // DBNAME
    process.env.USER , // USER
    process.env.PASSWORD, //PASSWORD
    {
        host: process.env.HOST, //HOST
        dialect: process.env.DIALECT // DIALECT
    }
);

sequelize.authenticate().then(() => {
    console.log('Соединение установлено успешно');
}).catch((error) => {
    console.error('Ошибка соединения ', error);
});


// burningpenguin@192 dataBase_messenger % node class_user.js
// Executing (default): SELECT 1+1 AS result
// Connection has been established successfully.


//создать таблицу autorization: login password id
// таблицу userdata: