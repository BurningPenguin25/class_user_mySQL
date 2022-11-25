const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('dbase_messenger', 'root', 'BurningPenguin25b', {
    host: 'localhost',
    dialect: 'mysql',
})

async function f() {
    try {
        await sequelize.authenticate()
        console.log('Соединение успешно установлено')
    } catch (e) {
        console.log('Ошибка подключения: ', e)
    }
}
f();


//IDuser:string,firstName:string,SurName:string,Patonymic:string,TelephoneNumber:st
// ring,Email:string,Login:string,Email:string,DateRegistration:string,DateLastOnline:string,

//sequelize-cli db:migrate:undo

//sequelize model:create --name PTUser --attributes userid:string,username:string,password:string,role:string,isadmin:boolean,address:string,insertdate:date,updatedate:date