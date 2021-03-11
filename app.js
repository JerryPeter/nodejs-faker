const faker = require('faker');

faker.locale = "id_ID";
var _name = faker.name.findName();
var _email = faker.internet.email();
var _card = faker.helpers.createCard();


console.log("Name : " + _name);
console.log("Email : " + _email);
console.log("Card : " + _card);