
//-------
//каждая модель относится к своей таблице. Строка 38
const Sequelize = require('sequelize')
class model1 extends Sequelize.Model {}

model1.init({
        ID: {
            type: Sequelize.NUMBER,
            field: '_idUser', // и так к каждому значению? создается поле автоматически?
        },
    SurName: {
        type: Sequelize.STRING,
        field: '_SurName',
    },
    Patronymic: { //Фамилия
        type: Sequelize.STRING,
    },
    TelNumber: { //номер телефона
        type: Sequelize.STRING,
    },
    LastActivity: { // Дата последней активности
        type: Sequelize.TIMESTAMP,
    },
    Login: { //обяза login
        type: Sequelize.STRING,
        allowNull: false
    },
    Email: { // почта
        type: Sequelize.STRING,
        allowNull: false,
    },
    RegistartionDate: { // дата регистрации
        type: Sequelize.DATE,
        allowNull: false
    },
    TypeOfLicense: { //Тип лицензии - Свободная (free), коммерческая(commercial), индивидуальная(individual) default=free, not null
        type: Sequelize.STRING,
        allowNull: false
    },
}, {sequelize, modelName: 'dbase_messenger' } //конфигурация создаваемой модели и соответствующей ей таблицы.

);

// МЕТОД? sequelize.query(). Отдельный файл ?
//   https://sequelize.org/docs/v6/core-concepts/raw-queries/


// Описание класса:
//
//     Имя класса User
//
// Поля класса:
//
//     Необязательные:
// Имя
// Фамилия
// Отчество
// Номер телефона
// Дата последней активности
//
// Обязательные:
// Логин
// Почта
// Дата регистрации
// Тип лицензии - Свободная (free), коммерческая(commercial), индивидуальная(individual) default=free, not null
//
// Ключи:
//     Первичный - id not null auto increments
//
// Методы класса:
//     Абстрактные
// Создать - Аналог операции insert into Users values …
// Удалить - Аналог операции delete from Users where …
// Выбрать по любому из обязательных или необязательных полей - Аналог операции select * from Users where …
// Обновить данные текущего пользователя - Аналог операции update Users set … where …
// Обновить данные пользователя, выбирая по любому из полей
//
// Всем методы должны возвращать массив пользователей, если подразумевается множественный выбор, соответствующий условию выбора

