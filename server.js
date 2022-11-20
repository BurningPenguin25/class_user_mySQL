// настройки подключение и запуск сервера

require('dotenv').config()

const express = require('express') // подключение express  фреймворка для node
const app = express()
const port = process.env.PORT

app.get('/', (req, res)=>{
    res.send('Hello on server')
})

app.listen(port, ()=>{  // ответ после подключения сервера
    console.log('Сервер запущен... ')
})